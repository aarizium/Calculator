import Buttons from "./Buttons";
import styles from "./Buttoncontainer.module.css";
const Buttoncontainer = ({ buttons, calculate }) => {
  return (
    <div className={styles.Buttoncontainer}>
      {buttons.map((button) => (
        <Buttons button={button} calculate={calculate} />
      ))}
    </div>
  );
};
export default Buttoncontainer;
