import React from 'react';

import { motion } from 'framer-motion';

const DropdownOptions = ({ options, initial, exit }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: `-${initial}%` }}
			animate={{ opacity: 1, y: '0%' }}
			exit={{ opacity: -1, y: `-${exit}%` }}
			className="dropdown-options"
		>
			<ul>
				{options.map((option) => (
					<li onClick={option.onClick}>{option.content}</li>
				))}
			</ul>
		</motion.div>
	);
};

export default DropdownOptions;
