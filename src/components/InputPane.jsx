import React from 'react';
import InputField from './InputField';
import TextArea from './TextArea';
import '../styles/InputPane.css';

function InputPane(props) {
  return (
    <div className='InputPane'>
      <h2>Recipe Name</h2>
      <InputField 
        actionType="apply" 
        placeholder="Recipe Name" 
        setRecipe={props.setRecipe} 
        recipe={props.recipe} 
        propName="name" 
        initialValue={props.recipe.name}
      />

      <h2>Ingredients</h2>
      <ul>                
        {/* Note - this of course re-renders once a change occurs
        so the index is only needed here on this re-rendered version, not the 'blank' one below */}
        {props.recipe.ingredients.map((ingredient, index) => (
          <InputField 
            key={index} 
            actionType="apply" 
            setRecipe={props.setRecipe} 
            recipe={props.recipe} 
            propName="ingredients" 
            initialValue={ingredient} 
            index={index}
          />
        ))}
        {/* Add one empty field at the end */}
        <InputField 
          actionType="applyAndClear" 
          placeholder="Add new ingredient" 
          setRecipe={props.setRecipe} 
          recipe={props.recipe} 
          propName="ingredients"
        />
      </ul>


      <h2>Instructions</h2>
      <ol>
      {props.recipe.instructions.map((instruction, index) => (
          <InputField 
            key={index} 
            actionType="apply" 
            setRecipe={props.setRecipe} 
            recipe={props.recipe} 
            propName="instructions" 
            initialValue={instruction} 
            index={index}
          />
        ))}
        {/* Add one empty field at the end */}
        <InputField 
          actionType="applyAndClear"
          placeholder="Add instruction" 
          setRecipe={props.setRecipe} 
          recipe={props.recipe} 
          propName="instructions"
        />
      </ol>

      <h2>Notes</h2>
      <TextArea 
        actionType="apply" 
        placeholder="Optional notes" 
        setRecipe={props.setRecipe} 
        recipe={props.recipe} 
        propName="notes" 
        initialValue={props.recipe.notes}
      />
    </div>
  );
}

export default InputPane;
