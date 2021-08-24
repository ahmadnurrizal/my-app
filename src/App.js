import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
function App() {
  const title = "learning react";
  const status = true;
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

  return (
    <div className="App" style={{ marginLeft: 50 }}>
      <Header />
      <h3>{title}</h3>
      <p>
        My name is Rzall,, <b>Happy Hacking</b>
      </p>
      <p>am I learning now ? {status ? "YESS" : "NOO"}</p>
      <br />
      <h3>Tasks</h3>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
