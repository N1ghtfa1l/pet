import { createSlice } from '@reduxjs/toolkit'
import { Film } from '../../../types/types'

export interface CounterState {
  value: Film[]
}

const initialState: CounterState = {
  value: [],
}

export const slicesFilm = createSlice({
  name: 'film',
  initialState,
  reducers: {
    addFilm: (state, action) => {
        state.value.push(action.payload)
    },
  },
})

export const { addFilm } = slicesFilm.actions

export default slicesFilm.reducer