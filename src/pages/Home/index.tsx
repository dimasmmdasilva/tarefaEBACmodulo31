import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLateral'
import ListaTarefas from '../../containers/ListaTarefas'

const Home = () => (
  <>
    <BarraLateral />
    <ListaTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
