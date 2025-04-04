
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({todoItems}) => {
return (
  <>
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))};
    </div>
  </>
);
};

export default TodoItems;