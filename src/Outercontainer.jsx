import styles from "./Outercontainer.module.css";
const Outercontainer = (props) => {
  return <div className={styles.outercontainer}>{props.children}</div>;
};
export default Outercontainer;
