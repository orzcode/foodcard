import { useState } from "react";
import ActionButton from "./inputButton";

function TextArea(props) {
  const [value, setValue] = useState("");

  return (
    <div>
      <textarea
        value={value}
        placeholder={props.placeholder}
        className="textarea"
        rows={3}
        cols={30}
        onChange={(e) => setValue(e.target.value)}
      />
      <ActionButton
        actionType="apply"
        value={value}
        setRecipe={props.setRecipe}
        propName={props.propName}
      />
    </div>
  );
}

export default TextArea;
