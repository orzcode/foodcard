import { useState } from "react";
import "../styles/MainMiddle.css";

import InputPane from "./InputPane";
import PreviewPane from "./PreviewPane";

function MainMiddle() {
  const [recipe, setRecipe] = useState(
    {
    name: "Recipe Name",
    ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
    instructions: ["Step 1", "Step 2", "Step 3"],
    notes: null,
    image: null,
    }
);

 return (

	<div className="MainMiddle">

    <InputPane setRecipe={setRecipe} recipe={recipe}/>
    <PreviewPane recipe={recipe}/>
	
	</div>

  );
}

export default MainMiddle;