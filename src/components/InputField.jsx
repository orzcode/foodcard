import { useState } from 'react'


function InputField() {
	const [value, setValue] = useState("");
  
	return (
	  <input
		type="text"
		value={value}
		onChange={(event) => setValue(event.target.value)}
	  />
	);
  }

export default InputField