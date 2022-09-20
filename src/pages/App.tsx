import Form from "../components/Form/Form";
import List from "../components/List/List";
import Stopwatch from "../components/Stopwatch/Stopwatch";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Stopwatch />
    </div>
  );
}

export default App;
