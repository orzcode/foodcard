import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import InputField from './InputField'

import '../styles/InputPane.css'

function InputPane() {
	const [count, setCount] = useState(0)
  
	return (

		<div className='InputPane'>
			<InputField />
		</div>

	)
	}

export default InputPane