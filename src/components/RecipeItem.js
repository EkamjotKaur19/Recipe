import React, {useState} from 'react'
import Dialog from './Dialog';

export default function RecipeItem(props) {
    const [show,setShow] = useState(false);
    const [Open, setOpen] = useState(false)
    let {recipe} = props;
    const [count, setCount] = useState(1);
    const handleOpen = () => {
        setOpen(!Open)
    }
  return (
    <>

        
        <div className="recipe">
            
            
            <img src={recipe.image} alt=""  />
            <span className="dishName">{recipe.label}</span>
            <div className="ing" onClick={() => handleOpen()}>Ingredients</div>

            
                
                

            
            <span className="see" onClick={() => window.open(recipe.url)}>See Recipe</span>
        </div>

        {Open &&  <>
            <Dialog recipe={recipe} />


        </>
        }


    </>
  )
}
