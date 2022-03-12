import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface SearchState {
  searchResult: { [key: string]: string };
}

const initialState: SearchState = {
  searchResult: {},
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveSearch: (state, action: PayloadAction<{}>) => {
      state.searchResult = action.payload
    },
  },
});

export const { saveSearch } = searchSlice.actions;

export const searchResult = (state: RootState) => state.search.searchResult;

export default searchSlice.reducer;