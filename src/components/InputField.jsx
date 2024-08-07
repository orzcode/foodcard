import { useState } from 'react'


function InputField(props) {
	const [value, setValue] = useState("");
  
	return (
	  <input
		type="text"
		placeholder={props.placeholder}
		value={value}
		onChange={(event) => setValue(event.target.value)}
	  />
	);
  }

export default InputField