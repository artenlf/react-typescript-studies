import { useState, useEffect } from "react";
import timeToSeconds from "../../common/utils/time";
import ITask from "../../types/task";
import Button from "../Button/Button";
import Clock from "../Clock/Clock";
import style from "./Stopwatch.module.scss";

interface Props {
  selected: ITask | undefined;
}

const Stopwatch = ({ selected }: Props) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and press start</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button>Start</Button>
    </div>
  );
};

export default Stopwatch;
