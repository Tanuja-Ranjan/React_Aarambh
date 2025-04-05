import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';



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
  let foodItems = ["Pulse", "Green Vegetable", "Roti", "Salad", "Sprouts"];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
