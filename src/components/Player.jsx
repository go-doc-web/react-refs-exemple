import { useState, useRef } from "react";

export default function Player() {
  const inputName = useRef(null);

  const [enterdInputName, setEnterdInputName] = useState(null);

  const handleClick = () => {
    setEnterdInputName(inputName.current.value);
    inputName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {enterdInputName ?? "unknown entity"} </h2>
      <p>
        <input type="text" ref={inputName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
