const TodoNew = (props) => {
  const { addNewTodo } = props;
  // addNewTodo('Quang');

  const handleClick = () => {
    alert("click me");
  }

  const handleChange = (msg) => {
    console.log("click me: " + msg);
  }

  return (
    <div className='todo-new'>
      <input
        type="text"
        onChange={(evt) => handleChange(evt.target.value)}
      />
      <button
        style={{ cursor: "pointer" }}
        onClick={addNewTodo}
      >Add</button>
    </div>
  );
};

export default TodoNew;