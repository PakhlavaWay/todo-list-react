import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import MyInput from "./components/Input/MyInput";
import Items from "./components/Items/Items";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Go to school", date: "Today", editMode: false },
    { id: 2, task: "Check the book", date: "Tomorrow", editMode: false },
  ]);

  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  // const [editMode, setEditMode] = useState(false);

  const addNewTask = (e) => {
    e.preventDefault();
    if (task && date) {
      const firstId = !tasks.length ? 1 : tasks[tasks.length - 1].id + 1;
      const newTask = {
        id: firstId,
        task,
        date,
      };
      setTasks([...tasks, newTask]);

      setTask("");
      setDate("");
    }
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  const editTask = (task) => {
    setTasks(tasks.map((t) => t.id === task.id ? {...t, editMode: !t.editMode} : t) )
  };
  
  const saveEditedTask = (task) => {
    if (task.task && task.date) {
      setTasks(tasks.map((t) => t.id === task.id ? {...t, task: task.task, date: task.date, editMode: false} : t));
    }
  }
  
  return (
    <div className="App">
      <h1 style={{ marginBottom: 20 }}>ToDo List</h1>
      {tasks.length === 0 ? <h2>No tasks</h2> : <h2>Tasks</h2>}
      <Items
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        setTasks={setTasks}
        saveEditedTask={saveEditedTask}
      />
      <form style={{ textAlign: "start" }}>
        <MyInput
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <MyInput
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Button onClick={addNewTask}>Add</Button>
      </form>
    </div>
  );
}

export default App;
