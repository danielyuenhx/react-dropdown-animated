import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import DropdownIcon from './DropdownIcon';
import './style.css';
import DropdownOptions from './DropdownOptions';

const DropdownButton = ({
	content = 'Dropdown button',
	options = [
		{ content: 'Option 1', onClick: (event) => {console.log("Option 1 clicked!")} },
		{ content: 'Option 2', onClick: (event) => {console.log("Option 2 clicked!")} },
	],
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const onClickHandler = (e) => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="dropdown-container" id="dropdown-container">
			<div className="dropdown-button" id="dropdown-button" onClick={onClickHandler}>
				<p>{content}</p>
				<DropdownIcon isOpen={isOpen} />
			</div>
			<AnimatePresence>
				{isOpen && <DropdownOptions options={options} />}
			</AnimatePresence>
		</div>
	);
};

export default DropdownButton;
