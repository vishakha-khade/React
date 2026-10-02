import { useState, useEffect } from "react";
import "./App.css";
import jeansImage from "./assets/jeans.jpg";
import dressImage from "./assets/dress.jpg";

function App() {
  const productPrice = 690;
  const dressPrice = 1299;

  const [quantity, setQuantity] = useState(1);
  const [dressQuantity, setDressQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    } else {
      alert("You can buy only 10 items at a time");
    }
  };

  const totalPrice = productPrice * quantity;

  useEffect(() => {
  console.log(`Cart updated: ${quantity} jeans`);
}, [quantity]);

  const decreaseQ = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      alert("Quantity cannot be less than 0");
    }
  };

  const dressQuantityincrease = () => {
    if (dressQuantity < 10) {
      setDressQuantity(dressQuantity + 1);
    } else {
      alert("You can buy only 10 items at a time");
    }

  }
  const dressQuantitydecrease = () => {
    if(dressQuantity > 0) {
      setDressQuantity(dressQuantity - 1);
    } else{
      alert("Quantity cannot be less than 0");
    }
  };
  const dressTotalPrice = dressPrice * dressQuantity;
  

  return (
    <div className="product-card">

    <div className="jean-card">
      <img src={jeansImage} alt="jeans" className="product-image"/>
      <h1>Jeans</h1>
      <p>Price: {productPrice}/-</p>

      <button onClick={increaseQuantity} className="increase-button">+</button>
      <span>{quantity}</span>
      <button onClick={decreaseQ} className="decrease-button">
        -
      </button>

      <h3 className="total">Total Price: {totalPrice}/-</h3>

      <span className="bag-message">
        Added {quantity} item{quantity > 1 ? "s" : ""} in bag
      </span>
      </div>

     <div className="top-card">
      <img src={dressImage} alt="dress" className="product-image"/>
      <h1>Dress</h1>
      <p>Price: {dressPrice}/-</p>

      <button onClick={dressQuantityincrease} className="increase-button">+</button>
      <span>{dressQuantity}</span>
      <button onClick={dressQuantitydecrease} className="decrease-button">
        -
      </button>

      <h3 className="total">Total Price: {dressTotalPrice}/-</h3>

      <span className="bag-message">
        Added {dressQuantity} item{dressQuantity > 1 ? "s" : ""} in bag
      </span>
      </div>

    </div>
  );
}

export default App;
