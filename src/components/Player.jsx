import { useState, useRef } from "react";

export default function Player() {
  const inputName = useRef(null);
  const count = useRef(0);
  const [enterdInputName, setEnterdInputName] = useState("");

  const handleClick = () => {
    setEnterdInputName(inputName.current.value);
    count.current = count.current + 1;
  };
  return (
    <section id="player">
      <h2>Welcome {enterdInputName ?? "unknown entity"} </h2>
      <p>
        <input type="text" ref={inputName} />
        <button onClick={handleClick}>Set Name - {count.current}</button>
      </p>
    </section>
  );
}
