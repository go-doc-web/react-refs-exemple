import { useImperativeHandle, useRef } from "react";

const ResultModal = ({ ref, result, targetTime }) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} open className="result-modal">
      <h2>You {result}</h2>
      <p>
        the target time was <strong>{targetTime}seconds</strong>
      </p>
      <p>
        You stoped the timer with <strong>X seconds left </strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
