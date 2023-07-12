import { useState } from 'react'

import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';
import Search from './components/Search';

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidades no sistema",
      category: "Trabalho",
      IsCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      IsCompleted: false,
    }
  ])

  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {

    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        IsCompleted: false,
      },
    ];

    //Atualizar o estado com os novos dados
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    //retornar para a lista original todos os items q for diferente do id recebino na função e o que tem o id igual retorna nulo
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );
    //atualizar o state
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    
    newTodos.map((todo) => todo.id === id ? todo.IsCompleted = !todo.IsCompleted : todo)
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className="todo-list">
        {todos
        // Usar a buscar através do componente search
        .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
