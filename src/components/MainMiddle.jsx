import { useState } from "react";
import "../styles/MainMiddle.css";

import InputPane from "./InputPane";
import PreviewPane from "./PreviewPane";

function MainMiddle() {
  const [recipe, setRecipe] = useState(
    {
    name: "Start your recipe!",
    ingredients: [''],
    instructions: [''],
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