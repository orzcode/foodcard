import React, { useState } from "react";
import ActionButton from "./ActionButton";
import { handleKeyDown, handleValueChange, handleAction } from "./inputUtils";
import updateIcon from "../assets/update.png";
import deleteIcon from "../assets/delete.png";

function InputField(props) {
  const [value, setValue] = useState(props.initialValue || "");

  const handleDelete = () => {
    props.setRecipe((prevRecipe) => {
      const updatedArray = prevRecipe[props.propName].filter(
        (_, i) => i !== props.index
      );
      return { ...prevRecipe, [props.propName]: updatedArray };
    });
  };

  return (
    <div className="fieldAndButton">
      <input
        type="text"
        value={value}
        maxLength={props.propName === "name" ? 60 : 300}
        onChange={handleValueChange(setValue)}
        onKeyDown={(e) =>
          handleKeyDown(e, () => handleAction({ value, setValue, ...props }))
        }
        placeholder={props.placeholder}
      />
      <ActionButton
        handleAction={() =>
          handleAction({
            actionType: props.actionType,
            value,
            setValue,
            ...props,
          })
        }
        icon={updateIcon}
      />
      {props.propName !== "name" && (
        <ActionButton handleAction={handleDelete} icon={deleteIcon} />
      )}
    </div>
  );
}

export default InputField;
