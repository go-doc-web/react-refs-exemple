import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timoutId = useRef(null);
  const dialog = useRef(null);
  const [timeExpired, setTimeExpired] = useState(false);
  const [startedTimer, setStartedTimer] = useState(false);

  const handleStart = () => {
    setStartedTimer(true);
    timoutId.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
  };

  const handleStop = () => {
    clearTimeout(timoutId.current);
  };
  return (
    <>
      {timeExpired && (
        <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      )}
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={startedTimer ? handleStop : handleStart}>
            {startedTimer ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={startedTimer ? "active" : undefined}>
          {startedTimer ? "Time is runnig..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
