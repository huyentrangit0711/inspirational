import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	weatherData, fetchWeather
} from '../../features/weather/weatherSlice';
export const Weather = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		console.log('go in hereeee')
		dispatch(fetchWeather())
	}, [dispatch])
	// const dataFetch = useSelector(weatherData)
	// console.log('dataFetch', dataFetch)
	// const {weather, main, loading} = dataFetch
	
	// const imageURL = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
	
	
	if(!loading) {
		console.log(weather)
		console.log(main)
		return (
		<div className="weather--wrapper">
			{/* <img src={imageURL} alt={weather[0].description} /> */}
			{/* <div className="weather-text">
				<p className="temperature">{main.temp}</p>
				<p className="weather-description">{weather[0].description}</p>
			</div> */}
			text
		</div>
	);
	} 
	
};
