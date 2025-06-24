import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Learn React", "Build a project"]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div>
      <h2>ToDoList</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ margin: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />

      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
export default ToDoList;
