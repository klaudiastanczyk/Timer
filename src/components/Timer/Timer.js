
const Timer = () => {

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let miliseconds = 0;

  if(hours<10){
    hours = '0' + hours
  }

  if(minutes<10){
    minutes = '0' + minutes
  }

  if(seconds<10){
    seconds = '0' + seconds
  }

  if(miliseconds<10){
    miliseconds = '0' + miliseconds
  }

  return (
    <span>{hours}:{minutes}:{seconds}:{miliseconds}</span>
  );
};

export default Timer;