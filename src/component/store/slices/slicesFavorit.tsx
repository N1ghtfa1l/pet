import { createSlice } from "@reduxjs/toolkit";
import { Film } from "../../../types/types";

export interface CounterState {
  value: Film[];
}

const initialState: CounterState = {
  value: [],
};

export const slicesFavorit = createSlice({
  name: "favoritFilms",
  initialState,
  reducers: {
    addFavorit: (state, action) => {
      const favoritExists = state.value.some(
        (favorit: any) => favorit.id === action.payload.id
      );
      if (!favoritExists) {
        state.value.push(action.payload);
      }
    },
    removeFavorit(state, action) {
      state.value = state.value.filter((value) => value.id !== action.payload);
    },
  },
});

export const { addFavorit, removeFavorit } = slicesFavorit.actions;

export default slicesFavorit.reducer;
