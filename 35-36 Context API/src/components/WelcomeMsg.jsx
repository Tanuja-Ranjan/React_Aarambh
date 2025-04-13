import { useContext } from "react";
import styles from "./WelcomeMsg.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMsg =()=> {
 
 const { todoItems } = useContext(TodoItemsContext);

return( !todoItems && <p className={styles.welcome}>Enjoy Your Day!</p>

);
};


export default WelcomeMsg;