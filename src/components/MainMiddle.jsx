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
    // {
    // name: "Piri-piri chicken with smashed sweet potatoes & broccoli",
    // ingredients: ['Dirt', 'giant pile of shit', 'giant pile of blood', 'giant pile of grass', 'giant pile of dirt', 'giant pile of shit', 'giant pile of blood', 'giant pile of grass', 'giant pile of dirt'],
    // instructions: ['Dirt', 'giant pile of shit', 'giant pile of blood', 'giant pile of grass', 'giant pile of dirt', 'giant pile of shit', 'giant pile of blood', 'giant pile of grass', 'giant pile of dirt'],
    // notes: "asfgiant pile of shitgiant pile of shitgiant pile of shitgiant pile of shitgiant pile of shitgiant pile of shitgiant pile of shitgiant pile of shit",
    // image: null,
    // }
);

 return (

	<div className="MainMiddle">

    <InputPane setRecipe={setRecipe} recipe={recipe} image={image} setImage={setImage} preview={preview} setPreview={setPreview}/>
    <PreviewPane recipe={recipe} preview={preview}/>
	
	</div>

  );
}

export default MainMiddle;