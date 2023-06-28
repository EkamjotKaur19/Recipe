import React from 'react'
import { useLocation } from 'react-router-dom';
import RecipeItem from './RecipeItem'
import Failure from './Failure'

export default function Saved() {
    const location = useLocation();
  const list = location.state && location.state.savedRecipes ? location.state.savedRecipes : [];
  console.log(list)


  return (
    <div className="recipe-container">
          {Array.isArray(list) && list.length > 0 ? (list.map((recipe) => {
            return <RecipeItem  recipe={recipe}/>
          }) ): <h1>No saved Recipes</h1>
          }
        </div>
  )
}
