
// const Item = (props) => {

//   return (
//     <li className="list-group-item">
//       {props.foodItem}
//     </li>
//   );
// };

import styles from "./Item.module.css";

// const Item = (props) => {
// let {foodItem} = props;

const Item = ({ foodItem,bought, handleBuyButton }) => {

  return (
    <li className={` ${styles["kg-item"]} list-group-item ${bought && 'active'}`}>
      <span className={`${styles["kg-span"]}`}> {foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        // onClick = {() => handleBuyButtonClicked(foodItem)
        onClick={handleBuyButton}>
        Buy
      </button>
    </li>
  );
};

export default Item;