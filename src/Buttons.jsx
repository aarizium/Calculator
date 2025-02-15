import styles from "./Buttons.module.css";
const Buttons = ({ button, calculate }) => {
  return (
    <>
      <button className={styles.button} onClick={(event) => calculate(event)}>
        {button}
      </button>
    </>
  );
};
export default Buttons;
