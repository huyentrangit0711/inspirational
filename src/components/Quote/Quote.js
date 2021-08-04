import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	quoteData, fetchQuote
} from '../../features/quote/quoteSlice';
export const Quote = () => {
	const { quote } = useSelector(quoteData)
	const dispacth = useDispatch()
	useEffect(() => {
		dispacth(fetchQuote())
	}, [dispacth])
	return (
		<div id="quote">
			<p className="quote-message">{quote.content}</p>
			<p className="quote-author">{quote.author}</p>
		</div>
	);
};
