import { React, useState } from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import ImageUpload from "./ImageUpload";
import "../styles/InputPane.css";

function InputPane(props) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="InputPane">
      <div className="accordion-section">
        <h2 onClick={() => toggleSection("name")} className="accordion-label">
          Recipe Name
        </h2>
        {openSection === "name" && (
          <div className="accordion-content">
            <InputField
              actionType="apply"
              placeholder="Recipe Name"
              setRecipe={props.setRecipe}
              recipe={props.recipe}
              propName="name"
              initialValue={props.recipe.name}
            />
          </div>
        )}
      </div>

      <div className="accordion-section">
        <h2 onClick={() => toggleSection("image")} className="accordion-label">
          Picture
        </h2>
        {openSection === "image" && (
          <div className="accordion-content">
            <ImageUpload
              image={props.image}
              setImage={props.setImage}
              preview={props.preview}
              setPreview={props.setPreview}
            />
          </div>
        )}
      </div>

      <div className="accordion-section">
        <h2
          onClick={() => toggleSection("ingredients")}
          className="accordion-label"
        >
          Ingredients
        </h2>
        {openSection === "ingredients" && (

            <ul className="accordion-content">
              {props.recipe.ingredients.map((ingredient, index) => (
                <InputField
                  key={index}
                  actionType="apply"
                  setRecipe={props.setRecipe}
                  recipe={props.recipe}
                  propName="ingredients"
                  initialValue={ingredient}
                  index={index}
                />
              ))}
              <InputField
                actionType="applyAndClear"
                placeholder="Add new ingredient"
                setRecipe={props.setRecipe}
                recipe={props.recipe}
                propName="ingredients"
              />
            </ul>

        )}
      </div>

      <div className="accordion-section">
        <h2
          onClick={() => toggleSection("instructions")}
          className="accordion-label"
        >
          Instructions
        </h2>
        {openSection === "instructions" && (

            <ol className="accordion-content">
              {props.recipe.instructions.map((instruction, index) => (
                <InputField
                  key={index}
                  actionType="apply"
                  setRecipe={props.setRecipe}
                  recipe={props.recipe}
                  propName="instructions"
                  initialValue={instruction}
                  index={index}
                />
              ))}
              <InputField
                actionType="applyAndClear"
                placeholder="Add instruction"
                setRecipe={props.setRecipe}
                recipe={props.recipe}
                propName="instructions"
              />
            </ol>

        )}
      </div>

      <div className="accordion-section">
        <h2 onClick={() => toggleSection("notes")} className="accordion-label">
          Notes
        </h2>
        {openSection === "notes" && (
          <div className="accordion-content">
            <TextArea
              actionType="apply"
              placeholder="Optional notes"
              setRecipe={props.setRecipe}
              recipe={props.recipe}
              propName="notes"
              initialValue={props.recipe.notes}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default InputPane;
