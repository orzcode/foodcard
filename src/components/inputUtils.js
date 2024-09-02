// Handles the keydown event for "Enter"
function handleKeyDown(event, actionHandler) {
	if (event.key === "Enter") {
	  actionHandler();
	}
  }
  
  // Handles the value change for input fields and text areas
  function handleValueChange(setValue) {
	return (e) => setValue(e.target.value);
  }
  
  // Handles applying changes to a single value (e.g., recipe name, notes)
  function handleApply({ value, setValue, setRecipe, propName, index, recipe }) {
	const currentValue = value.trim();
	if (currentValue !== "") {
	  setRecipe((prevRecipe) => {
		if (Array.isArray(prevRecipe[propName])) {
		  const updatedArray = [...prevRecipe[propName]];
		  updatedArray[index] = currentValue;
		  return {
			...prevRecipe,
			[propName]: updatedArray,
		  };
		} else {
		  return {
			...prevRecipe,
			[propName]: currentValue,
		  };
		}
	  });
	  //setValue(""); // Clear the input field
	}
  }
  
  // Handles sub-array items eg ingredients or instructions
  function handleAndClear({ value, setValue, setRecipe, propName, recipe }) {
	const recipeSubArrayCopy = [...recipe[propName]];
	const currentInputValue = value.trim();
  
	if (currentInputValue !== "") {
	  recipeSubArrayCopy.push(currentInputValue);
	}
  
	setRecipe((prevRecipe) => ({
	  ...prevRecipe,
	  [propName]: recipeSubArrayCopy,
	}));
	//setValue(""); // Clear the input field
  }
  
  // Handles deciding between applying changes or adding a new item
  function handleAction({ actionType, ...params }) {
	if (actionType === "apply") {
	  handleApply(params);
	} else if (actionType === "applyAndClear") {
	  handleAndClear(params);
	}
  }
  
  export {
	handleKeyDown,
	handleValueChange,
	handleApply,
	handleAndClear,
	handleAction,
  };
  