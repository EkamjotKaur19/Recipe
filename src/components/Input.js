import React, {useState} from 'react';
import axios from 'axios';
import RecipeItem from './RecipeItem';
import Failure from './Failure';

const APP_ID = '0a7886f6';
const APP_KEY = '863b7ffa2de0ae6449ab6c79585f6254';

export default function Input() {
    const [searchTerm, setSearchTerm]=useState('');
    
    const [list, setList] = useState([]);
    const [timeoutId, setTimeoutId] = useState();

    const fetchData = async (searchTerm) => {
      const response = await axios.get(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      console.log(response);
      setList(response.data.hits);
    }
  
    const handleSearchTerm = (event) => {
      clearTimeout(timeoutId);
      setSearchTerm(event.target.value);
      const timeout = setTimeout(() => fetchData(event.target.value), 500);
      setTimeoutId(timeout);
    }

  return (
    <>
        <div id="home" className="search-box">
          <form className="d-flex search">
            <input className="form-control me-4 box inp" type="search" placeholder="Search Recipe" value={searchTerm} onChange={handleSearchTerm} />
          </form>
        </div>

        <div className="recipe-container">
          {list.length ? list.map((recipe) => {
            return <RecipeItem  key={recipe.uri} recipe={recipe.recipe}/>
          }) : <Failure />
          }
        </div>
    </>
  )
}
