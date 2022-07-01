import {React , useState} from 'react'

const Card = (props) => {
    const [input, setInput] = useState("")
	
	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(input)
        props.onEvent(input)
	}

    const onChangeInput = (e) => {
        console.log(e.target.value)
        setInput(e.target.value)
    }

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={input} onChange={onChangeInput} />
			<button type="submit">Submit</button>
		</form>
	)

}

export default Card