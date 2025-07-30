import { useState } from "react";

const TodoNew = (props) => {

  const [valueInput, setValueInput] = useState('demo');
  const { addNewTodo } = props;
  // addNewTodo('Quang');

  const handleClick = () => {
    addNewTodo(valueInput);
    setValueInput("")
  }

  const handleChange = (msg) => {
    setValueInput(msg);
  }

  return (
    <div className='todo-new'>
      <input
        type="text"
        onChange={(evt) => handleChange(evt.target.value)}
        value={valueInput}
      />
      <button
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >Add</button>
    </div>
  );
};

export default TodoNew;