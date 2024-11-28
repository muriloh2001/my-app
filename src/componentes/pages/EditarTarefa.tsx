import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tarefa } from "../models/Tarefa";

function ProdutoAlterar() {
  const { id } = useParams();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState("");


  function enviarProduto(e: any) {
    e.preventDefault();

    const tarefa: Tarefa = {
        titulo: titulo,
        descricao: descricao,
        status: status,
        categoriaId: 0
    };

    axios
      .put(`http://localhost:5273/tarefas/alterar/${id}`, tarefa)
      .then((resposta: { data: any; }) => {
        console.log(resposta.data);
      });
  }

  return (
    <div id="alterar-tarefa" className="container">
      <h1>Alterar Tarefa</h1>
      <form onSubmit={enviarProduto}>
        <div>
          <label htmlFor="nome">titulo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={titulo}
            required
            onChange={(e: any) => setTitulo(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            id="descricao"
            value={descricao}
            name="descricao"
            onChange={(e: any) => setDescricao(e.target.value)}
          />
        </div>
      <div>
         <label>Status:</label>
         <select value={status} onChange={(e) => setStatus(e.target.value)}>
           <option value="pendente">Pendente</option>
         <option value="em andamento">Em Andamento</option>
         </select>
      </div>


        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

export default ProdutoAlterar;
