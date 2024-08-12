import React, { useState } from 'react';
import ActionButton from './inputButton';

function InputField(props) {
  const [value, setValue] = useState(props.initialValue || ""); // Start with the initial value

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
        setValue={setValue}
        recipe={props.recipe}
        setRecipe={props.setRecipe} 
        propName={props.propName} 
        index={props.index} // Pass the index of the ingredient to identify it
      />
    </div>
  );
}

export default InputField;
