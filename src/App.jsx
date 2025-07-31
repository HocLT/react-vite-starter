import { useState } from 'react';
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';

const App = () => {

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
    <>
      <Header />
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
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
