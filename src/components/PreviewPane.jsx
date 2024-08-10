import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../styles/PreviewPane.css";

function PreviewPane(props) {

  return (
    <div className="PreviewPane">
      <h2>{props.recipe.name}</h2>

      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {props.recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="instructions">
        <h3>Instructions</h3>
        <ol>
          {props.recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>

      {props.recipe.notes ? (
        <div className="notes">
          <h3>Notes</h3>
          <p>{props.recipe.notes}</p>
        </div>
      ) : null}

    </div>
  );
}

export default PreviewPane;
