import React, { useState, useRef } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  return (
    <div>
      <h2>timer: {count}</h2>
      <button onClick={startTimer}>start</button>
      <span></span>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
export default Timer;
