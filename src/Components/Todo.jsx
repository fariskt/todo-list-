import { useRef, useState } from "react";
import { Button } from "react-bootstrap";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [inpVal, setInpVal] = useState("");

  const addTask = () => {
    if (inpVal !== "") {
      setTodo([...todo, inpVal]);
    } else {
      alert("Enter a task");
    }
    setInpVal("");
  };

  const removeTask = (id) => {
    const removeTask = todo.filter((val, index) => index !== id);
    setTodo(removeTask);
  };

  const enterHandle = (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <>
      <h2 className="add-task" onClick={focusInp}>
        Add Task
      </h2>
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter your task here..."
          value={inpVal}
          className="inp"
          onChange={(e) => setInpVal(e.target.value)}
          onKeyDown={enterHandle}
        />
        <Button className="primary p-3" onClick={addTask}>
          Add task
        </Button>
      </div>
      {todo.length > 0 && (
        <div className="task-list">
          {todo.map((val, index) => (
            <div key={index} className="lists">
              <li>{index + 1 + ". " + val}</li>
              <Button className="bg-danger" onClick={() => removeTask(index)}>
                Delete
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Todo;
