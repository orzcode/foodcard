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
        {props.recipe.ingredients.map((ingredient, index) => (
          <InputField 
            key={index} 
            actionType="apply" 
            placeholder="Ingredient" 
            setRecipe={props.setRecipe} 
            recipe={props.recipe} 
            propName="ingredients" 
            initialValue={ingredient} 
            index={index}
          />
        ))}
        {/* Add one empty field at the end */}
        <InputField 
          actionType="addItem" 
          placeholder="Add new ingredient" 
          setRecipe={props.setRecipe} 
          recipe={props.recipe} 
          propName="ingredients"
        />
      </ul>

      <h2>Instructions</h2>
      <InputField 
        actionType="addItem" 
        placeholder="Step" 
        setRecipe={props.setRecipe} 
        recipe={props.recipe} 
        propName="instructions"
      />

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
