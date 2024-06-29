import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value:any,
}

const initialState: CounterState = {
  value: [],
}

export const slicesPlayer = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addPlayer: (state, action) => {
      const playerExists = state.value.some((player:any) => player.id === action.payload.id);
      if (!playerExists) {
        state.value.push(action.payload);
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addPlayer } = slicesPlayer.actions

export default slicesPlayer.reducer