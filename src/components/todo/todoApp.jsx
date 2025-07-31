import { useState } from 'react';
import TodoNew from './TodoNew';
import TodoData from './TodoData';
import './todo.css';
import reactLogo from '../../assets/react.svg';

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    let id = todoList.length;
    id++;
    const newTodo = {
      id: id,
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const deleteTodo = (id) => {
    const tmp = todoList.filter(item => item.id != id);
    setTodoList(tmp);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Hello world</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />

      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
        :
        <div className='todo-img'>
          <img className='logo' src={reactLogo} />
        </div>
      }
    </div>
  );
};

export default TodoApp;