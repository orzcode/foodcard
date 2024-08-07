import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../styles/PreviewPane.css";

function PreviewPane(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="PreviewPane">
      <h2>{props.name}</h2>

      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {props.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="instructions">
        <h3>Instructions</h3>
        <ol>
          {props.instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ol>
      </div>

      {props.notes ? (
        <div className="notes">
          <h3>Notes</h3>
          <p>{props.notes}</p>
        </div>
      ) : null}

    </div>
  );
}

export default PreviewPane;
