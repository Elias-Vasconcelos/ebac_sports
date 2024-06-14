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
      if (state.itens.find((p) => p.id === itemFavoritado.id)) {
        const favoritosSemProduto = state.itens.filter(
          (p) => p.id !== itemFavoritado.id
        )
        state.itens.concat(favoritosSemProduto)
      } else {
        state.itens.push(itemFavoritado)
      }
    }
  }
})

export const { favoritar } = favoritos.actions
export default favoritos.reducer
