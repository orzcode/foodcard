import React from 'react';

function ActionButton(props) {

	  //for single add button
  const handleApply = () => {
    props.setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [props.propName]: props.value,
    }));
  };

  //for multiple add button
  const handleAddItem = () => {
    const newValues = [props.recipe[propName]];
    const currentValue = value.trim();
    if (currentValue !== "") {
      newValues[index] = currentValue;
      props.setRecipe((prevRecipe) => ({
        ...prevRecipe,
        [props.propName]: [...newValues, ""], // Adds the new value and an empty string for the next input field
      }));
    }
  };

  const handleClick = () => {
    if (props.actionType === 'apply') {
      handleApply();
    } else if (props.actionType === 'addItem') {
      handleAddItem();
    }
  };
  //^^VV
  //decides whether to show the single-add, or multiple-add button
  return (
    <button onClick={handleClick}>
      {props.actionType === 'apply' ? 'Apply' : 'Add'}
    </button>
  );
}

export default ActionButton;
