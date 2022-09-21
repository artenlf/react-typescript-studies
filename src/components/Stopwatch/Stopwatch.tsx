import { useState, useEffect } from "react";
import timeToSeconds from "../../common/utils/time";
import ITask from "../../types/task";
import Button from "../Button/Button";
import Clock from "../Clock/Clock";
import style from "./Stopwatch.module.scss";

interface Props {
  selected: ITask | undefined;
  endTask: () => void;
}

const Stopwatch = ({ selected, endTask }: Props) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  const countdown = (counter: number = 0) => {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countdown(counter - 1);
      }
      endTask();
    }, 1000);
  };

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and press start</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => countdown(time)}>Start</Button>
    </div>
  );
};

export default Stopwatch;
