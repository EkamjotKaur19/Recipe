import React, {useState} from 'react';
import axios from 'axios';
import RecipeItem from './RecipeItem';
import Failure from './Failure';
import Spinner from './Spinner/Spinner';

const APP_ID = '0a7886f6';
const APP_KEY = '863b7ffa2de0ae6449ab6c79585f6254';

export default function Input() {
    const [searchTerm, setSearchTerm]=useState('');
    const [search, setSearch] = useState(false)
    const [ loading, setLoading ] =useState(false)
    
    const [list, setList] = useState([]);
    const [timeoutId, setTimeoutId] = useState();

    const fetchData = async (searchTerm) => {
      setLoading(true)
      const response = await axios.get(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      console.log(response);
      setList(response.data.hits);
      setLoading(false)
    }
  
    const handleSearchTerm = (event) => {
      clearTimeout(timeoutId);
      setSearchTerm(event.target.value);
      {event.target.value === '' ? setSearch(false) : setSearch(true)};
      {event.target.value === '' ? setList([]) : setSearch(true)};
      const timeout = setTimeout(() => fetchData(event.target.value), 500);
      setTimeoutId(timeout);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
    }

  return (
    <>
        <div id="inp" className="search-box">
          <div class="input-group" onSubmit={handleSubmit}>
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={searchTerm} onChange={handleSearchTerm} />
            <button type="button" class="btn btn-outline-primary">search</button>
          </div>
        </div>

        {loading && <Spinner />}
        

        <div className="recipe-container">
          {Array.isArray(list) && list.length > 1 ? (list.slice(0, 9).map((recipe) => {
            return <RecipeItem  key={recipe.url} recipe={recipe.recipe}/>
          }) ): <Failure search={search} loading={loading} />
          }
        </div>
    </>
  )
}
