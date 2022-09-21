import { useState } from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import Stopwatch from "../components/Stopwatch/Stopwatch";
import ITask from "../types/task";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks((olderTasks) => olderTasks.map((task) => ({ ...task, selected: task.id === selectedTask.id ? true : false })));
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Stopwatch />
    </div>
  );
}

export default App;
