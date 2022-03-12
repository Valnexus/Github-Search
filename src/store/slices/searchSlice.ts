import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface SearchState {
  searchRepResult: { [key: string]: any };
  searchUserResult: { [key: string]: any };
}

const initialState: SearchState = {
  searchRepResult: {},
  searchUserResult: {},
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveRepSearch: (state, action: PayloadAction<{}>) => {
      state.searchRepResult = action.payload
    },
    saveUserSearch: (state, action: PayloadAction<{}>) => {
      state.searchUserResult = action.payload
    },
  },
});

export const { saveRepSearch, saveUserSearch } = searchSlice.actions;

export const searchRepResult = (state: RootState) => state.search.searchRepResult;
export const searchUserResult = (state: RootState) => state.search.searchUserResult;

export default searchSlice.reducer;