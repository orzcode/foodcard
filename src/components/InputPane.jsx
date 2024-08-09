import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import InputField from './InputField'
import TextArea from './TextArea'

import '../styles/InputPane.css'

function InputPane(props) {
	
	return (

		<div className='InputPane'>
			<h2>Recipe Name</h2>
			<InputField placeholder="Recipe Name" setRecipe={props.setRecipe} recipe={props.recipe} propName="name"/>
			<h2>Ingredients</h2>
			<InputField />
			<h2>Instructions</h2>
			<InputField />
			<h2>Notes</h2>
			<TextArea  placeholder="Optional notes" setRecipe={props.setRecipe} recipe={props.recipe} propName="notes"/>
		</div>

	)
	}

export default InputPane