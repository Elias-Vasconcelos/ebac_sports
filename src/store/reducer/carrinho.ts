import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinho = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produtoDocarrinho = action.payload
      if (state.itens.find((p) => p.id === produtoDocarrinho.id)) {
        alert('Item já adicionado')
      } else {
        state.itens = [...state.itens, produtoDocarrinho]
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinho.actions
export default carrinho.reducer
