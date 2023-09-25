import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    quotes: [],
    error: null,
    successCreatedQuote: false,
    loadingCreateQuote: false,
    errorCreatingQuote: false
  }

export const fetchQuotes = createAsyncThunk(
  "quotes/fetchQuotes",
  async () => {
    console.log('entri aqui')
    const response = await axios.get("http://localhost:8080/api/get-quotes");
    console.log(response)
    return response.data.results;
  }
);

export const createQuote = createAsyncThunk(
  "quotes/createQuote",
  async () => {
    const response = await axios.get("http://localhost:8080/api/get-quotes");
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

    builder.addCase(createQuote.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(createQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.quotes = action.payload;
    })
    builder.addCase(createQuote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    })
  },
});

export const { addQuote, removeQuote } = quotesSlice.actions;

export default quotesSlice.reducer;
