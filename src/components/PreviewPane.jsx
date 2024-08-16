import "../styles/PreviewPane.css";

function PreviewPane(props) {
  return (
    <div className="PreviewPane">
      <div className="previewUpper">
        <div className="H2Ingr">
          <h2>{props.recipe.name}</h2>
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
        </div>

          <img
            src={
              props.preview
                ? props.preview
                : "https://placehold.co/280?text=Add+a+pic!"
            }
            alt="Preview"
          />

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
    </div>
  );
}

export default PreviewPane;
