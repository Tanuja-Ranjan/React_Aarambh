import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

// function App() {
//   let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Sprouts"];
// let emptyMessage = foodItems.length === 0 ? <h3>I'm still hungry.</h3> : null;
//   return (
//     <>
//       <h1>Healthy Food</h1>
//       {emptyMessage}
//       <ul className="list-group ">
//       {foodItems.map((item) => (
//          <li key={item} className="list-group-item">{item}</li>
//       ))}

//       </ul>
//     </>
//   );
// }

function App() {
  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well-being
        </p>
      </Container>
    </>
  );
}

export default App;
