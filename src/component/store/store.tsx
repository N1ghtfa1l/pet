import { configureStore } from '@reduxjs/toolkit'
import slicesFilmReducer from './slices/slicesFilm'
import slicesPlayerReducer from './slices/slicesPlayer'
import slicesAllFilms from './slices/slicesAllFilm'

export const store = configureStore({
  reducer: {
    film: slicesFilmReducer,
    player: slicesPlayerReducer,
    allFilms: slicesAllFilms,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch