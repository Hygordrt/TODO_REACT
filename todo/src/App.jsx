import { useState } from 'react'

import Todo from "./components/Todo";
import TodoForm from './components/TodoForm';

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
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
