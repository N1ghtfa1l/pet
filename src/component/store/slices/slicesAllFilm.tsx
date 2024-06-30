import { createSlice } from '@reduxjs/toolkit'
import { Film } from '../../../types/types'

export interface CounterState {
  value: Film[]
  isLoaded: boolean,
}

const initialState: CounterState = {
  value: [],
  isLoaded: false,
}

export const slicesAllFilm = createSlice({
  name: 'allFilms',
  initialState,
  reducers: {
    addAllFilms: (state, action) => {
        state.value = action.payload
        state.isLoaded = true;
    },
  },
})

export const { addAllFilms } = slicesAllFilm.actions

export default slicesAllFilm.reducer