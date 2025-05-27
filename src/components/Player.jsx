import { useState, useRef } from "react";

export default function Player() {
  const [enterdInputName, setEnterdInputName] = useState("");
  const [submited, setSubmited] = useState(false);

  const handleChange = (e) => {
    setSubmited(false);
    setEnterdInputName(e.target.value);
  };

  const handleClick = () => {
    setSubmited(true);
  };
  return (
    <section id="player">
      <h2>Welcome {submited ? enterdInputName : "unknown entity"} </h2>
      <p>
        <input type="text" onChange={handleChange} value={enterdInputName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
