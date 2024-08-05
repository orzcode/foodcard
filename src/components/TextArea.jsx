import { useState, useRef } from 'react'


function TextArea() {
	const [value, setValue] = useState("");
  
	return (
	  <textarea
		value={value}
		onChange={(event) => setValue(event.target.value)}
		placeholder="Enter text here"
		className="textarea"
		rows={3}
		cols={30}
	  />
	);
  }
  
  export default TextArea;