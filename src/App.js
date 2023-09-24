import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counters />
    </div>
  );
}

function Counters() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const handleAddCounter = () => {
    setCounter((counter) => counter + step);
  };

  const handleMinusCounter = () => {
    setCounter((counter) => counter - step);
  };

  const handleAddStep = () => {
    setStep((step) => step + 1);
  };

  const handleMinusStep = () => {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  };

  return (
    <>
      <div style={{ margin: 10, display: "flex", alignItems: "center" }}>
        <button className="btn" onClick={handleMinusCounter}>
          -
        </button>
        <span className="counter">Counter: {counter} </span>
        <button className="btn" onClick={handleAddCounter}>
          +
        </button>
      </div>
      <div style={{ margin: 10, display: "flex", alignItems: "center" }}>
        <button className="btn" onClick={handleMinusStep}>
          {" "}
          -{" "}
        </button>
        <span className="counter">Step: {step} </span>
        <button className="btn" onClick={handleAddStep}>
          +
        </button>
      </div>
      <Days counter={counter} step={step} />
    </>
  );
}

function Days({ counter }) {
  const date = new Date();
  if (counter > 0) {
    date.setDate(date.getDate() + counter);
  } else date.setDate(date.getDate() - -counter);

  return (
    <div style={{ margin: 10 }}>
      <p>
        {counter > 0 || counter < 0
          ? `${counter} dayes from today ${counter > 0 ? "is" : "was"} `
          : `Today is `}
        {date.toDateString()}
      </p>
    </div>
  );
}
