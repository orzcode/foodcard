import React from "react";

function ActionButton(props) {
  // For updating an existing ingredient or instruction
  const handleApply = () => {
    const currentValue = props.value.trim();
    if (currentValue !== "") {
      props.setRecipe((prevRecipe) => {
        // Check if the property is a sub array (e.g., ingredients, instructions)
        if (Array.isArray(prevRecipe[props.propName])) {
          const updatedArray = [...prevRecipe[props.propName]]; // As per React - copies the old state object (sub-array, here)
          updatedArray[props.index] = currentValue; // Update the ingredient at the specific index
          return {
            ...prevRecipe,
            [props.propName]: updatedArray, //replaces old sub-array with new modified one
          };
        } else {
          // For single string values like recipe name or notes
          return {
            ...prevRecipe,
            [props.propName]: currentValue, // Simply update the string value
          };
        }
      });
    }
  };

  // For adding a new ingredient
  const handleAndClear = () => {
    const recipeSubArrayCopy = [...props.recipe[props.propName]];
    const currentInputValue = props.value.trim();

    if (currentInputValue !== "") {
      recipeSubArrayCopy.push(currentInputValue);
    }

    props.setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [props.propName]: recipeSubArrayCopy,
    }));
    props.setValue(""); // Clear the input field
  };

  const handleClick = () => {
    if (props.actionType === "apply") {
      handleApply();
    } else if (props.actionType === "applyAndClear") {
      handleAndClear();
    }
  };

  return <button onClick={handleClick}>➕</button>;
}

export default ActionButton;
