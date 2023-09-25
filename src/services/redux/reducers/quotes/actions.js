import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    quotes: [],
    error: null,
  }

export const fetchQuotes = createAsyncThunk(
  "quotes/fetchQuotes",
  async () => {
    const response = await axios.get("http://localhost:8080");
    return response.data.results;
  }
);


const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuote: (state, action) => {
      state.quotes.push(action.payload);
    },
    removeQuote: (state, action) => {
      state.quotes = state.quotes.filter(
        (quote) => quote._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuotes.pending, (state) => {
        state.loading = true;
      })
    builder.addCase(fetchQuotes.fulfilled, (state, action) => {
        state.loading = false;
        state.quotes = action.payload;
    })
    builder.addCase(fetchQuotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    })
  },
});

export const { addQuote, removeQuote } = quotesSlice.actions;

export default quotesSlice.reducer;
