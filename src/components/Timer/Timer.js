import styles from './Timer.module.scss';

const Timer = props => {
  
  const miliseconds = props.time;
  let correctMiliSec = miliseconds % 100;
  let seconds = Math.floor((miliseconds/100) % 60);
  let minutes = Math.floor((miliseconds/100/60) % 60);
  let hours = Math.floor((miliseconds/100/60/60) % 24);

  if(hours<10){
    hours = '0' + hours
  }

  if(minutes<10){
    minutes = '0' + minutes
  }

  if(seconds<10){
    seconds = '0' + seconds
  }

  if(correctMiliSec<10){
    correctMiliSec = '0' + correctMiliSec
  }

  return (
    <h3>{hours}:{minutes}:{seconds}:{correctMiliSec}</h3>
  )
};

export default Timer;