import { useState } from 'react'
import ActionButton from './inputButton';


function InputField(props) {
	const [value, setValue] = useState("");

	// const commonProps = {
	// 	recipe: props.recipe,
	// 	setRecipe: props.setRecipe,
	//   };

	return (
	  <div>
		<input
				type="text"
				placeholder={props.placeholder}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			  />
			  <ActionButton 
				actionType={props.actionType}
				value={value}
				recipe={props.recipe}
				setRecipe={props.setRecipe} 
				propName={props.propName} 
			  />
	  </div>
	);
  }

export default InputField