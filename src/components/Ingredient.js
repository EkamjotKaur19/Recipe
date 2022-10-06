import React from 'react'

export default function Ingredient(props) {
    let {recipe} = props;
  return (
    <div className="ingred">
        <table>
            <thead>
                <th>
                    Ingredient
                </th>
                <th>
                    Weight
                </th>
            </thead>
            <tbody className='ing-desc' >
                {recipe.ingredients.map((ingredientObj) =>(
                    <tr>
                        <td>{ingredientObj.text}</td>
                        <td>{ingredientObj.weight}</td>
                    </tr>
                ) )}
                
            </tbody>
        </table>
    </div>
  )
}
