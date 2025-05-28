import { useImperativeHandle, useRef } from "react";

const ResultModal = ({ ref, timeRemaining, targetTime, onHandleReset }) => {
  const dialog = useRef();

  const userLost = timeRemaining <= 0;
  const formatedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>You score:{score} </h2>}
      <p>
        the target time was <strong>{targetTime}seconds</strong>
      </p>
      <p>
        You stoped the timer with{" "}
        <strong>{formatedTimeRemaining} seconds left </strong>
      </p>
      <form method="dialog" onSubmit={onHandleReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
