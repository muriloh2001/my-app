import { useEffect, useState } from "react";
import { Tarefa } from "../models/Tarefa";

function CadastrarTarefa() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");
  const [categoriaId, setCategoriaId] = useState(0);
  //Criar a interface de categoria e realizar a tipagem
  const [categorias, setCategorias] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/categoria/listar")
      .then((resposta) => resposta.json())
      .then((categorias) => {
        setCategorias(categorias);
        console.table(categorias);
      });
  }, []);

  function enviarProduto(e: any) {
    const tarefa : Tarefa = {
      titulo: titulo,
      descricao: descricao,
      status:status,
      categoriaId: categoriaId,
    };

    //AXIOS - Biblioteca para requisições HTTP - Recomendação

    fetch("http://localhost:5000/api/tarefas/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefa),
    })
      .then((resposta) => resposta.json())
      .then((produto) => {
        console.log(tarefa);
      });
    e.preventDefault();
  }

  return (
    <div >
      <h1>Cadastrar Produto</h1>
      <form onSubmit={enviarProduto} >
        <div >
          <label htmlFor="nome">Titulo</label>
          <input
            onChange={(e: any) => setTitulo(e.target.value)}
            type="text"
            id="nome"
            name="nome"
            required
            placeholder="Digite o Titulo da tarefa"
          />
        </div>

        <div >
          <label htmlFor="descricao">Descrição</label>
          <textarea
            onChange={(e: any) => setDescricao(e.target.value)}
            id="descricao"
            name="descricao"
            required
            placeholder="Digite a descrição da tarefa"
          ></textarea>
        </div>

        <div>
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pendente">Pendente</option>
          <option value="em andamento">Em Andamento</option>
          <option value="concluída">Concluída</option>
        </select>
      </div>


        <div >
          <label htmlFor="categorias">Categorias</label>
          <select
            id="categoria"
            onChange={(e: any) => setCategoriaId(e.target.value)}
          >
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button type="submit">Cadastrar Produto</button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarTarefa;
