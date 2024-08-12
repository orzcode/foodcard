import React from 'react';

function ActionButton(props) {
  
  // For updating an existing ingredient
  const handleApply = () => {
    const currentValue = props.value.trim();
    if (currentValue !== "") {
      props.setRecipe((prevRecipe) => {
        const updatedArray = [...prevRecipe[props.propName]];
        updatedArray[props.index] = currentValue; // Update the ingredient at the specific index
        return {
          ...prevRecipe,
          [props.propName]: updatedArray,
        };
      });
    }
  };

  // For adding a new ingredient
  const handleAddItem = () => {
    const recipeSubArrayCopy = [...props.recipe[props.propName]];
    const currentInputValue = props.value.trim();

    if (currentInputValue !== "") {
      recipeSubArrayCopy.push(currentInputValue);
    }

    props.setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [props.propName]: recipeSubArrayCopy,
    }));
    props.setValue(''); // Clear the input field
  };

  const handleClick = () => {
    if (props.actionType === 'apply') {
      handleApply();
    } else if (props.actionType === 'addItem') {
      handleAddItem();
    }
  };

  return (
    <button onClick={handleClick}>
      ➕
    </button>
  );
}

export default ActionButton;
