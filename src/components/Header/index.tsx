import { useSelector } from 'react-redux'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { rootReducer } from '../../store'

const Header = () => {
  const Carrinho = useSelector((state: rootReducer) => state.carrinho.itens)
  const favoritos = useSelector((state: rootReducer) => state.favorito.itens)

  const valorTotal = Carrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {Carrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
