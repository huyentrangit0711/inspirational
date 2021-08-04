import React from 'react';
import { useSelector } from 'react-redux';
import {
	backgroundData
} from '../../features/background/backgroundSlice';
export const Background = () => {
	const { background } = useSelector(backgroundData)
	console.log(background)
	return (
		<div id="background-image-container" className="surface">
			<img
				id="background-image"
				src={background.urls.raw}
				alt={background.alt_description}
			/>
		</div>
	);
};
