import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames:null,
    openaiKey:null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieNames = movieNames;
    },
    addOpenAIKey: (state,action) => {
      state.openaiKey = action.payload
    }
  },
});

export const { toggleGptSearchView, addGptMovieResult, addOpenAIKey } =
  gptSlice.actions;

export default gptSlice.reducer;