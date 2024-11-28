import './App.css';
import Listartarefa from './componentes/ListarTarefa';
import CadastroTarefa from './componentes/pages/cadastrar';
import EditarTarefa from './componentes/pages/EditarTarefa';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to= "/api/tarefas/listar"> Listar Produtos</Link>
            </li>
            <li>
              <Link to= "/api/tarefas/cadastrar"> Cadastrar Produto</Link>
            </li>
            <li>
              <Link to= "/api/tarefas/alterar/:id"> Consultar Cep</Link>
            </li>
          </ul>
        </nav>
        <div id= "conteudo">
          <Routes>
            <Route path="/" element={<Listartarefa/>}/>
            <Route path="/api/tarefas/listar" element={<Listartarefa/>}/>
            <Route path="/api/tarefas/cadastrar" element={<CadastroTarefa/>}/>
            <Route path="/api/tarefas/alterar/{id}" element={<EditarTarefa/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
