import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCurrentWeather } from './weatherAPI'
const initialState = {
	weather: [],
	main: {},
	loading: false,
	error: null
};
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (thunkAPI) => {
    const response = await fetchCurrentWeather();
	console.log('fetchWeather response', response)
    return response;
  }
);
export const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
		state.error = null;
      })
	  .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = true;
		state.error = action.error;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
		const {weather, main} = action.payload
		console.log('heeeeeee')
        state.loading = false;
        state.weather = weather
		state.main = main
		state.error = null;
      });
  },
});
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const weatherData = (state) => state.weather;
export default weatherSlice.reducer;
