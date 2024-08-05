import { useState, useRef } from 'react'


function TextArea() {
	const [value, setValue] = useState("");
	const textAreaRef = useRef(null);
  
	function auto_height(elem) {
	  elem.style.height = "auto";
	  elem.style.height = `${elem.scrollHeight}px`;
	}
  
	return (
	  <textarea
		value={value}
		onChange={(event) => setValue(event.target.value)}
		onInput={() => auto_height(textAreaRef.current)}
		ref={textAreaRef}
		rows="2"
		className="textarea"
	  />
	);
  }
  
  export default TextArea;