import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';

const App = () => {
  const addNewTodo = (name) => {
    alert(`Call me: ${name}`);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Hello world</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData

      />
      <div className='todo-img'>
        <img className='logo' src={reactLogo} />
      </div>
    </div>
  );
}

export default App;
