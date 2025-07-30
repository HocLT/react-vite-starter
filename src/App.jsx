import { useState } from 'react';
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Demo 1" },
    { id: 2, name: "Demo 2" }
  ]);

  const addNewTodo = (name) => {
    let id = todoList.length;
    id++;
    const newTodo = {
      id: id,
      name: name
    }
    setTodoList([...todoList, newTodo])
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Hello world</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        todoList={todoList}
      />
      <div className='todo-img'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  );
}

export default App;
