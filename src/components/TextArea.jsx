import { useState, useRef } from 'react'


function TextArea() {
	const [value, setValue] = useState("");
	const textAreaRef = useRef(null);
  
	function auto_height(elem) {
	//   elem.style.height = "auto";
	//   elem.style.height = `${elem.scrollHeight}px`;

	  elem.parentNode.dataset.replicatedValue = elem.value;
	  //elem.style.height = "auto";
	}
  
	return (

	<div className="grow-wrap">
	  <textarea
		value={value}
		onChange={(event) => setValue(event.target.value)}
		onInput={() => auto_height(textAreaRef.current)}
		ref={textAreaRef}
		className="textarea"
		rows={3}
		cols={10}
	  />
	</div>
	);
  }
  
  export default TextArea;