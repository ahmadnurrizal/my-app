import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
function App() {
  const title = "learning react";
  const status = true;

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "haloHalo_1",
      day: "29/09/2000",
      reminder: true,
    },
    {
      id: 2,
      text: "haloHalo_2",
      day: "29/09/2000",
      reminder: true,
    },
    {
      id: 3,
      text: "haloHalo_3",
      day: "29/09/2000",
      reminder: true,
    },
  ]);

  // Add task
  const addTask = (task) => {
    // type task is object

    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      // for each loop
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App" style={{ marginLeft: 50 }}>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* if statement without else, using && */}
      {showAddTask && <AddTask onAdd={addTask} />}
      <h3>{title}</h3>
      <p>
        My name is Rzall,, <b>Happy Hacking</b>
      </p>
      <p>am I learning now ? {status ? "YESS" : "NOO"}</p>
      <br />
      <h3>Tasks</h3>
      {/* if statement */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>No Tasks</h3>
      )}
    </div>
  );
}

export default App;
