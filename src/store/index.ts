import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducer/carrinho'
import favoritosReducer from './reducer/favoritos'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export default store
export type rootReducer = ReturnType<typeof store.getState>
