import { useState } from 'react'


function InputField(props) {
	const [value, setValue] = useState("");

	const updateRecipeProp = (prop, value) => {
		props.setRecipe((prevRecipe) => ({
		  ...prevRecipe,
		  [props.propName]: value,
		  //^^specifc property to update, passed in from parent attitribute
		  //uses object destructuring due to being dynamic
		}));
	  };

	const handleInputChange = (event) => {
		setValue(event.target.value);
		updateRecipeProp(props.propName, event.target.value)
	  };

	return (
	  <input
		type="text"
		placeholder={props.placeholder}
		value={value}
		onChange={handleInputChange}
	  />
	);
  }

export default InputField