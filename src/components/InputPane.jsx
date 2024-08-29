import React, { useState } from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import ImageUpload from "./ImageUpload";
import "../styles/InputPane.css";

function InputPane(props) {
  const [openSection, setOpenSection] = useState("name");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
  /*- Literally just sets the state to the name of the section clicked on
      In other words, sets the "open section" state - merely a variable - 
      to the name of the section clicked on, or to nothing (i.e if it's already clicked)-*/

  return (
    <div className="InputPane">
      <div className={`accordion-section ${openSection === "name" ? "active" : ""}`}>
        {/* Has a 'variable' classname based on the above state
        i.e. - if it matches, it gets the 'active' class */}

        <h2 onClick={() => toggleSection("name")} className="accordion-label">
          {/* will toggle the state */}
          Recipe Name
        </h2>
        
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
      </div>

      <div className={`accordion-section ${openSection === "image" ? "active" : ""}`}>
        <h2 onClick={() => toggleSection("image")} className="accordion-label">
          Picture
        </h2>
        <div className="accordion-content">
          <ImageUpload
            image={props.image}
            setImage={props.setImage}
            preview={props.preview}
            setPreview={props.setPreview}
          />
        </div>
      </div>

      <div className={`accordion-section ${openSection === "ingredients" ? "active" : ""}`}>
        <h2 onClick={() => toggleSection("ingredients")} className="accordion-label">
          Ingredients
        </h2>
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
          {/* This however is a UL which is MAPPED from the actual recipe
          i.e., at pageload, it's EMPTY therefore WONT SPAWN a field
          and yet the below field will still exist to get started.
          
          React magic ensures this populates/spawns more as items get added*/}



          {/* This is the initial field, rendered simply as part of the component,
          and should in theory always be the last input field
          
          This is a 'placeholder' for the user to add new ingredients*/}
          <InputField
            actionType="applyAndClear"
            placeholder="Add new ingredient"
            setRecipe={props.setRecipe}
            recipe={props.recipe}
            propName="ingredients"
          />
        </ul>
      </div>

      <div className={`accordion-section ${openSection === "instructions" ? "active" : ""}`}>
        <h2 onClick={() => toggleSection("instructions")} className="accordion-label">
          Instructions
        </h2>
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
      </div>

      <div className={`accordion-section ${openSection === "notes" ? "active" : ""}`}>
        <h2 onClick={() => toggleSection("notes")} className="accordion-label">
          Notes
        </h2>
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
      </div>
    </div>
  );
}

export default InputPane;
