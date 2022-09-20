import Button from "../Button/Button";
import Clock from "../Clock/Clock";
import style from "./Stopwatch.module.scss";

const Stopwatch = () => {
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and press start</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Start</Button>
    </div>
  );
};

export default Stopwatch;
