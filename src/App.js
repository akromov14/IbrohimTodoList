import React, { useState,useEffect } from "react";
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  //State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  //USE EFFECT
  useEffect(() => {
    const filterHandler = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
          case 'uncomleted':
            setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);
  
  // const saveLocalTodos = () => {
  //   if(localStorage.getItems('todos') ===null) {
  //     localStorage.setItem('todos', JSON.stringify([]));
  //   }else{
  //     localStorage.setItem('todos', JSON.stringify(todos));
  //   }
  // } 
  
  return (
    <div className="App">
      <header>
          <h1>Ibrohim's Todo List</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
