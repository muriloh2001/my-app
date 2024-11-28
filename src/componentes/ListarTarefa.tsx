
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Tarefa } from "./models/Tarefa";

function ListarProdutos() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    consultarProdutos();
  }, []);

  function consultarProdutos() {
    fetch("http://localhost:5000/api/tarefas/listar")
      .then((resposta) => resposta.json())
      .then((tarefas) => {
        setTarefas(tarefas);
        console.table(tarefas);
      });
  }

  return (
    <div id="listartarefas" className="container">
      <h1>Listar Produtos</h1>
      <table >
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Criado em</th>
            <th>Alterar</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.id}>
              <td>{tarefa.id}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.status}</td>

              <td>
                <Link to={`/api/tarefas/alterar/${tarefa.id}`}>
                  Alterar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarProdutos;


