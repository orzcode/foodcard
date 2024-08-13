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
        rows={6}
        cols={30}
        onChange={(e) => setValue(e.target.value)}
      />
      <ActionButton
        actionType="applyAndClear"
        value={value}
        setValue={setValue}
        recipe={props.recipe}
        setRecipe={props.setRecipe}
        propName={props.propName}
      />
    </div>
  );
}

export default TextArea;
