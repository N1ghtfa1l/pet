import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: boolean
}

const initialState: CounterState = {
  value: false,
}

export const slicesAuth = createSlice({
  name: 'allFilms',
  initialState,
  reducers: {
    addAuth: (state, action) => {
        state.value = action.payload
    },
  },
})

export const { addAuth } = slicesAuth.actions

export default slicesAuth.reducer