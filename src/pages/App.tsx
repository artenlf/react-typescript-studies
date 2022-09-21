import { useState } from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import Stopwatch from "../components/Stopwatch/Stopwatch";
import ITask from "../types/task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} />
      <Stopwatch />
    </div>
  );
}

export default App;
