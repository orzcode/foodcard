import React, { useState } from "react";
import ActionButton from "./ActionButton";
import {
  handleKeyDown,
  handleValueChange,
  handleAction,
} from "./inputUtils"; 

function TextArea(props) {
  const [value, setValue] = useState(props.initialValue || "");

  return (
    <>
      <textarea
        value={value}
        placeholder={props.placeholder}
        className="textarea"
        rows={6}
        cols={31}
        onChange={handleValueChange(setValue)}
        onKeyDown={(e) =>
          handleKeyDown(e, () => handleAction({ value, setValue, ...props }))
        }
      />
      <ActionButton
        handleAction={() =>
          handleAction({ actionType: props.actionType, value, setValue, ...props })
        }
      />
    </>
  );
}

export default TextArea;
