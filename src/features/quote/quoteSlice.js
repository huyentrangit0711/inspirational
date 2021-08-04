import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchQuotes} from './quoteAPI'
const initialState = {
	quote: {},
	loading: false,
	error: null
};
export const fetchQuote = createAsyncThunk(
  'quote/fetchQuote',
  async (thunkAPI) => {
    const response = await fetchQuotes();
    return response;
  }
);
export const quoteSlice = createSlice({
	name: 'quotes',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.loading = true;
		state.error = null;
      })
	  .addCase(fetchQuote.rejected, (state, action) => {
        state.loading = true;
		state.error = action.error;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
		const { _id, content, author} = action.payload
		const quote = {
			id: _id,
			content,
			author,
		}
        state.loading = false;
        state.quote = quote
		state.error = null;
      });
  },
});
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const quoteData = (state) => state.quote;
export default quoteSlice.reducer;
