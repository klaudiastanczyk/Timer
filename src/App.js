import { useEffect, useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import Header from "./components/Header/Header";
import Timer from "./components/Timer/Timer";
import styles from './App.module.scss';


const App = () => {

  const [totalTime, setTotalTime] = useState(0);
  const [intern, setInter] = useState(null);
  const [status, setStatus] = useState(0);

  const increaseTime = () => {
    setTotalTime(totalTime => totalTime + 1)
  }

  useEffect(() => {
    if(status == 1){
      setInter(
        setInterval(() => {
          increaseTime();
        }, 10)
      )
      return () => {
        clearInterval(intern)
      }
    }
  }, [status]);

  return (
    <div className={styles.general}>
      <Header />
      <Timer time={totalTime} />
      <Buttons status={setStatus} interval={intern} setTotalTime={setTotalTime}/>
    </div>
  );
};

export default App;