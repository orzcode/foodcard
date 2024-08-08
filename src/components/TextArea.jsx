import { useState, useRef } from 'react'


function TextArea(props) {
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
	  <textarea
		value={value}
		onChange={handleInputChange}
		placeholder={props.placeholder}
		className="textarea"
		rows={3}
		cols={30}
	  />
	);
  }
  
  export default TextArea;