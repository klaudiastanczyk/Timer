import Button from '../Button/Button';
import styles from './Buttons.module.scss';

const Buttons = props => {
  const startBut = () => {
    props.status(1)
  }

  const stopBut = () => {
    props.status(0);
    clearInterval(props.interval)
  }

  const resetBut = () => {
    props.status(0);
    clearInterval(props.interval)
    props.setTotalTime(0)
  }

  return (
    <div className={styles.wrapper}>
      <Button action={startBut}>START</Button>
      <Button action={stopBut}>STOP</Button>
      <Button action={resetBut}>RESET</Button>
    </div>
  )
}

export default Buttons;