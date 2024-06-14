import { useSelector } from 'react-redux'
import { useGetJogosQuery } from '../services/api'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { rootReducer } from '../store'

import * as S from './styles'

const ProdutosComponent = () => {
  const favoritos = useSelector((state: rootReducer) => state.favorito.itens)
  const { data: produtos } = useGetJogosQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
