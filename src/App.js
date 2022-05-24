import { useState } from "react";
import Timer from "./components/Timer";

const App = () => {

  const [time, setTime] = useState(0);
  const [timerId, updateTimerId] = useState(null);

  const update = () => {
    setTime(time => time + 1)
  }

  const startTime = () => {
    updateTimerId(setInterval(update, 1000))

  }

  const stopTime = () => {
    clearInterval(timerId);
    updateTimerId(null);
  }




  return (
    <div>
    <div> {{time}}></div>
    <div>
      <button onClick={startTime}>Start</button>
      <button onClick={stopTime}>STOP</button>
    </div>
    </div>
  );
};

export default App;