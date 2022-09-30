import { useEffect, useState } from 'react';
import './App.css';
import DropdownButton from './components/DropdownButton';

let option = 2;

function App() {
	const [buttonValue, setButtonValue] = useState('My button');

	const somethingHandler = (event) => {
		console.log('Something was clicked!');
	};
	const anotherThingHandler = (event) => {
		console.log('Another thing was clicked!');
	};

	const [options, setOptions] = useState([
		{
			content: 'Do something',
			onClick: somethingHandler,
		},
		{
			content: 'Do another thing',
			onClick: anotherThingHandler,
		},
		{
			content: 'Something else entirely',
			onClick: anotherThingHandler,
		},
	]);

	const buttonChangeHandler = (event) => {
		setButtonValue(event.target.value);
	};

	const addOptionHandler = (event) => {
		option += 1;
		setOptions((options) => [...options, { content: 'Option ' + option }]);
	};

	return (
		<div
			className="App"
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				alignItems: 'center',
				width: '100%',
				height: '70vh',
                marginTop: '5rem'
			}}
		>
			<DropdownButton
				content={buttonValue ? buttonValue : 'My Button'}
				options={options}
			/>
			<div style={{display: 'flex', flexDirection: 'column'}}>
                Button Value
				<input
					value={buttonValue}
					onChange={buttonChangeHandler}
					type="text"
				/><br></br>
				<button onClick={addOptionHandler}>Add Option</button>
			</div>
		</div>
	);
}

export default App;
