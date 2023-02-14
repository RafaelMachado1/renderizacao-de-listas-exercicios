import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import ListaTarefasConcluidas from "../ListaTarefasConcluidas";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const [completas, setCompletas] = useState([]) //exercício 2

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };


  /*    exercício 1
  Hoje no nosso projeto só é possível adicionar uma nova tarefa quando clicamos no botão.
  Adicione uma funcionalidade para que seja possível enviar a nova tarefa também usando a 
  tecla ENTER.
   */
  const adicionaTarefaEnter = (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
      adicionaTarefa()
    }
  }



  const removeTarefa = (tarefa) => {
    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);

    //exercício 2
    const listaCompleta = [...completas, tarefa]
    setCompletas(listaCompleta)
    console.log(listaCompleta)
  };


  return (
    <ListaTarefasContainer>
      <InputContainer>

        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyUp={adicionaTarefaEnter} //Exercício 1
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>

      <LinhaHorizontal />
      <ListaTarefasConcluidas completa={completas} />
    </ListaTarefasContainer>
  );
}
