import styles from "./Inputs.module.css";
const Inputs = ({ result }) => {
  return (
    <>
      <input type="text" value={result} className={styles.input} />
    </>
  );
};
export default Inputs;
