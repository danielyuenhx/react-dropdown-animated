import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import DropdownIcon from '../DropdownIcon';
import './style.css';
import DropdownOptions from '../DropdownOptions';

const DropdownButton = ({
	value = 'Dropdown button',
	options = [
		{
			content: 'Default Option 1',
			onClick: (event) => {
				console.log('Option 1 clicked!');
			},
		},
		{
			content: 'Default Option 2',
			onClick: (event) => {
				console.log('Option 2 clicked!');
			},
		},
	],
	initial = 50,
	exit = 25,
	buttonFontColor = '#ffffff',
	buttonBackgroundColor = '#227fe3',
	buttonOutlineColor = '#8080808a',
    buttonBorderRadius = '4',
	closeOnOutsideClick = true,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const onClickHandler = (e) => {
		setIsOpen(!isOpen);
	};

	const buttonRef = useRef(null);

	useEffect(() => {
		// click outside handler
		function clickOutsideHandler(event) {
			if (
				buttonRef.current &&
				!buttonRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		}

		if (closeOnOutsideClick) {
			// bind event listener to entire document
			document.addEventListener('mouseup', clickOutsideHandler);
			return () => {
				// remove event listener on cleanup
				document.removeEventListener('mouseup', clickOutsideHandler);
			};
		}
	}, [buttonRef]);

	return (
		<div
			className="dropdown-container"
			id="dropdown-container"
			ref={buttonRef}
		>
			<div
				className="dropdown-button"
				id="dropdown-button"
				onClick={onClickHandler}
				style={{
					color: buttonFontColor,
					backgroundColor: buttonBackgroundColor,
					outlineColor: buttonOutlineColor,
                    borderRadius: `${buttonBorderRadius}px`,
				}}
			>
				<p>{value}</p>
				<DropdownIcon isOpen={isOpen} />
			</div>
			<AnimatePresence>
				{isOpen && (
					<DropdownOptions
						initial={initial}
						exit={exit}
						options={options}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};

export default DropdownButton;
