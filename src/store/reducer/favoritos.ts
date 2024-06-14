import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritos = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const itemFavoritado = action.payload
      const Favoritado = state.itens.find((p) => p.id === itemFavoritado.id)
      if (Favoritado) {
        state.itens = state.itens.filter((p) => p.id !== itemFavoritado.id)
      } else {
        state.itens = [...state.itens, itemFavoritado]
      }
    }
  }
})

export const { favoritar } = favoritos.actions
export default favoritos.reducer
