import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import useCart from './hooks/useCart'

import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";

import "./App.css";

function App() {

  // custom hooks
  const [
    cart, 
    dark, 
    addToCart, 
    removeFromCart, 
    changeDarkMode
  ] = useCart('dark', false)

  // array of plants that have been added to the cart
  // const [cart, setCart] = useState([]);

  // // add a plant to the cart
  // const addToCart = (plant) => {
  //   setCart([...cart, plant]);
  // };

  // // remove a plant from the cart
  // const removeFromCart = (plant) => {
  //   setCart(cart.filter((p) => p.id !== plant.id));
  // };

  return (
    <div className={dark ? 'dark-mode': ''}>
      <Router>
        <nav className="container">
          <h1>
            React Plants <span role="img">🌿</span>
          </h1>
          <ul className="steps">
            <li>
              <NavLink exact to="/">
                Plants
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                Cart
                <span className="cart-badge">
                  {cart.length > 0 && cart.length}
                </span>
              </NavLink>
            </li>
            <button onClick={changeDarkMode}>
              Dark Mode
            </button>
          </ul>
        </nav>
        <Route
          exact
          path="/"
          render={() => <PlantList dark={dark} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />
          )}
        />
        <Route path="/checkout" component={CheckoutForm} />
      </Router>
    </div>
  );
}

export default App;
