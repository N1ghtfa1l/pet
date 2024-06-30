import { configureStore } from '@reduxjs/toolkit'
import slicesFilmReducer from './slices/slicesFilm'
import slicesPlayerReducer from './slices/slicesPlayer'
import slicesAllFilms from './slices/slicesAllFilm'
import slicesFavorit from './slices/slicesFavorit'

export const store = configureStore({
  reducer: {
    film: slicesFilmReducer,
    player: slicesPlayerReducer,
    allFilms: slicesAllFilms,
    favoritFilms: slicesFavorit,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch