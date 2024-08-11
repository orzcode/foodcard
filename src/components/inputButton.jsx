import React from 'react';

function ActionButton(props) {

	  //for single add button
  const handleApply = () => {
    const currentValue = props.value.trim();
    if (currentValue !== "") {
    props.setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [props.propName]: props.value,
    }));
  }
  };

  //for multiple add button
  const handleAddItem = () => {
    const recipeSubArrayCopy = [...props.recipe[props.propName]]; // Copy of the array
    const currentInputValue = props.value.trim();
    
    // Check if the first item is the default/empty
    if (recipeSubArrayCopy[0] === "") {
      // IF so, replace with the new ingredient/instruction
      recipeSubArrayCopy[0] = currentInputValue;
      //conditional rendering handles the rest

    } else if (currentInputValue !== "") {
      // Otherwise, add the current input field value to the array
      // (as long as input field isn't empty)
      recipeSubArrayCopy.push(currentInputValue);
    }
  
    // Update the recipe with the modified array
    props.setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [props.propName]: recipeSubArrayCopy,
    }));
  };
  

  const handleClick = () => {
    if (props.actionType === 'apply') {
      handleApply();
    } else if (props.actionType === 'addItem') {
      handleAddItem();
    }
    props.setValue('')
    //clears the input field or textarea after applying
  };
  //decides whether to show the single-add, or multiple-add button


  return (
    <button onClick={handleClick}>
      {/* {props.actionType === 'apply' ? 'Apply' : 'Add'} */}
      ➕
    </button>
  );
}

export default ActionButton;
