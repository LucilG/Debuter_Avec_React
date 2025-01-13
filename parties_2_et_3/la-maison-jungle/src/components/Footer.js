import '../styles/Footer.css'
import { useState } from 'react'


function Footer() {
  const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
    console.log('handleInput ok')
		setInputValue(e.target.value)
    // console.log(e)
    // console.log(e.target.value)
    // console.log(inputValue)
	}

	function handleBlur() {
    console.log('handleBlur ok')
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

  return (
    <footer className='lmj-footer'>
      <input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
    </footer>
  )
}

export default Footer
