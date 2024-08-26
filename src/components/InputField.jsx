import React, { useState } from "react";
import ActionButton from "./ActionButton";
import {
  handleKeyDown,
  handleValueChange,
  handleAction,
} from "./inputUtils"; 

function InputField(props) {
  const [value, setValue] = useState(props.initialValue || "");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleValueChange(setValue)}
        onKeyDown={(e) =>
          handleKeyDown(e, () => handleAction({ value, setValue, ...props }))
        }
        placeholder={props.placeholder}
      />
      <ActionButton
        handleAction={() =>
          handleAction({ actionType: props.actionType, value, setValue, ...props })
        }
      />
    </>
  );
}

export default InputField;
