import React, {useState} from 'react'
import Ingredient from './Ingredient';



export default function RecipeItem(props) {
    const [show,setShow] = useState(false);
    let {recipe} = props;
    const [count, setCount] = useState(1);

    const handleShow = (count) => {
        count%2 === 0 ? setShow(false) : setShow(true);
        setCount(count+1);
    };
  return (
    <>
        
        <div className="recipe">
            <img src={recipe.image} alt=""  />
            <span className="dishName">{recipe.label}</span>
            <div className="ing" onClick={() => handleShow(count)}>Ingredients</div>
                
                {show ? 
                    <Ingredient key={recipe.label} recipe={recipe} />
                    : <h1></h1>
                }

            
            <span className="see" onClick={() => window.open(recipe.url)}>See Recipe</span>
        </div>
    </>
  )
}
