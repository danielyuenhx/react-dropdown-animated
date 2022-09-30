import React from 'react';

const DropdownIcon = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 10 10"
			stroke="currentColor"
            strokeWidth={0.75}
			height="1em"
			width="1em"
		>
			<path
				d={
					props.isOpen
						? 'M2,6.5 L5,3.5 L8,6.5'
						: 'M2,3.5 L5,6.5 L8,3.5'
				}
			/>
		</svg>
	);
};

export default DropdownIcon;
