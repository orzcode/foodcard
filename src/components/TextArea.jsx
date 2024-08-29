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
    <div className="fieldAndButton">
      <textarea
        value={value}
        placeholder={props.placeholder}
        className="textarea"
        rows={8}
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
    </div>
  );
}

export default TextArea;
