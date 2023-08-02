import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
let adjustIntervals = undefined;
function App() {
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);
  const StartWatch = () => {
    adjustIntervals = setInterval(() => {
      setCount((x) => x + 1);
    }, 1000);
    setCheck(true)
  };
  const StopWatch = () => {
    clearInterval(adjustIntervals);
    setCheck(false)
  };
  const ResetWatch = () => {
    setCount(0);
    clearInterval(adjustIntervals);
    setCheck(false)
  };
  return (
    <>
      <div className="app">
        <h1 className="title">StopWatch</h1>
        <h2 className="counter">{count}</h2>
        <div className="buttons">
          <button disabled={check} className="btn btn1" onClick={StartWatch}>
            Start
          </button>
          <button className="btn btn2" onClick={StopWatch}>
            Stop
          </button>
          <button className="btn btn3" onClick={ResetWatch}>
            Resest
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
