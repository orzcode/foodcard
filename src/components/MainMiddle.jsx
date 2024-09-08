import { useState } from "react";
import "../styles/MainMiddle.css";

import InputPane from "./InputPane";
import PreviewPane from "./PreviewPane";

function MainMiddle() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [recipe, setRecipe] = useState(
    {
    name: "Start your recipe!",
    ingredients: [],
    instructions: [],
    notes: null,
    image: null,
    }
);

 return (

	<div className="MainMiddle">

    <InputPane setRecipe={setRecipe} recipe={recipe} image={image} setImage={setImage} preview={preview} setPreview={setPreview}/>
    <PreviewPane recipe={recipe} preview={preview}/>
	
	</div>

  );
}

export default MainMiddle;