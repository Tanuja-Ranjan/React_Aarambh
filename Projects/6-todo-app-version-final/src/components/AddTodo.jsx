import { useRef } from "react";
import { RiHeartAddFill } from "react-icons/ri";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
     event.preventDefault();
     const todoName = todoNameElement.current.value;
      const dueDate = dueDateElement.current.value;
    todoNameElement.current.value="";
     dueDateElement.current.value = "";
      
    onNewItem(todoName, dueDate);
    
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddButtonClicked} className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
           
          />
        </div>
        <div className="col-4">
          <input type="date"
          ref={dueDateElement}
  />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <RiHeartAddFill />{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
