import { useState } from "react";
import Item from "./Item/Item";
import style from "./List.module.scss";

function List() {
  const [tasks, setTasks] = useState([
    {
      task: "React",
      time: "02:00:00",
    },
    {
      task: "JavaScript",
      time: "01:00:00",
    },
    {
      task: "TypeScript",
      time: "01:30:00",
    },
  ]);

  return (
    <aside className={style.taskList}>
      <h2
        onClick={() => {
          setTasks([...tasks, { task: "Study useState", time: "00:25:00" }]);
        }}
      >
        Studies of the day
      </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
