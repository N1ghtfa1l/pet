import { createSlice } from '@reduxjs/toolkit'
import { Film } from '../../../types/types'

export interface CounterState {
  value: Film[]
  isLoaded: boolean
}

const initialState: CounterState = {
  value: [],
  isLoaded:false,
}

export const slicesFilm = createSlice({
  name: 'film',
  initialState,
  reducers: {
    addFilm: (state, action) => {
        state.value.push(...action.payload)
        state.isLoaded = true
    },
  },
})

export const { addFilm } = slicesFilm.actions

export default slicesFilm.reducer