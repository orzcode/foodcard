import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

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