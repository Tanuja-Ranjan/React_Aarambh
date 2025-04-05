// import styles from "../App.module.css";...not a good way
import styles from "./Display.module.css";

const Display = () => {
   return <input type="text" className={styles.display} />;
}

export default Display;