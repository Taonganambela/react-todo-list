import { useState, useEffect } from "react";

const ToDo = () => {
  const [event, setEvent] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event) {
      setTodos([...todos, event]);
      setEvent("");
    }
    return;
  };

  return (
    <div className="todo">
      <form onClick={handleSubmit}>
        <h1>To-Do List</h1>
        <input
          type="text"
          required
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        />

        <button onClick={handleSubmit}>Add todo</button>
        <ul>
          {todos.length > 0 &&
            todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </form>
    </div>
  );
};

export default ToDo;
