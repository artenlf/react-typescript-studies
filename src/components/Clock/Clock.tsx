import style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}

const Clock = ({ time = 0 }: Props) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesDecimals, minutesUnits] = String(minutes).padStart(2, "0");
  const [secondsDecimals, secondsUnits] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.clockNumber}>{minutesDecimals}</span>
      <span className={style.clockNumber}>{minutesUnits}</span>
      <span className={style.clockColon}>:</span>
      <span className={style.clockNumber}>{secondsDecimals}</span>
      <span className={style.clockNumber}>{secondsUnits}</span>
    </>
  );
};

export default Clock;
