import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} ativo={false} />
        <FiltroCard legenda="concluídas" contador={2} ativo={false} />
        <FiltroCard legenda="urgentes" contador={3} ativo={false} />
        <FiltroCard legenda="importantes" contador={4} ativo={false} />
        <FiltroCard legenda="normal" contador={5} ativo={false} />
        <FiltroCard legenda="todas" contador={10} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)
export default BarraLateral
