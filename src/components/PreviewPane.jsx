import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import "../styles/PreviewPane.css";
import PrintButton from "./PrintButton";

function PreviewPane(props) {
  const previewPaneRef = useRef(null);

  const handlePrint = useReactToPrint({
    preserveAfterPrint: true,
    content: () => previewPaneRef.current,
    documentTitle: "Recipe - " + props.recipe.name
  });

  return (
    <div className="PreviewPane" ref={previewPaneRef}>
      <h2>{props.recipe.name}</h2>
      
      <img
        src={props.preview ? props.preview : "https://placehold.co/300?text=Add+a+pic!"}
        alt="Preview"
      />

      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {props.recipe.ingredients.length === 0 ? (
            <li>&nbsp;</li> // Empty bullet point
          ) : (
            props.recipe.ingredients.map(
              (ingredient, index) =>
                ingredient !== "" && <li key={index}>{ingredient}</li>
            )
          )}
        </ul>
      </div>

      <div className="instructions">
        <h3>Instructions</h3>
        <ol>
          {props.recipe.instructions.length === 0 ? (
            <li>&nbsp;</li> // Empty bullet point
          ) : (
            props.recipe.instructions.map(
              (instruction, index) =>
                instruction !== "" && <li key={index}>{instruction}</li>
            )
          )}
        </ol>
      </div>

      {props.recipe.notes ? (
        <div className="notes">
          <h3>Notes</h3>
          <p>{props.recipe.notes}</p>
        </div>
      ) : null}

      <PrintButton handlePrint={handlePrint} />
    </div>
  );
}

export default PreviewPane;
