import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todo/todoSlice';
import quoteReducer from '../features/quote/quoteSlice';
import weatherReducer from '../features/weather/weatherSlice';
import backgroundReducer from '../features/background/backgroundSlice';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todos: todosReducer,
		quote: quoteReducer,
		weather: weatherReducer,
		background: backgroundReducer
	},
});
