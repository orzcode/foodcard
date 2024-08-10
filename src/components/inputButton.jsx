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
  const newValues = [...props.recipe[props.propName]]; // copy of the array
  const currentValue = props.value.trim();
  
  if (currentValue !== "") {
    newValues.push(currentValue); // Add the current input field value to the array
    props.setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [props.propName]: [...newValues], // Update the (sub)array with the ingredient or whatever
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
