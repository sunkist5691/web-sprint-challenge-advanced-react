import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const useCart = (key, initialValue) => {
   const [cart, setCart] = useState([]);
   const [dark, setDark] = useLocalStorage(key, initialValue);

  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };

  const changeDarkMode = () => {
     setDark(!dark)
  }

  return [cart, dark, addToCart, removeFromCart, changeDarkMode]
}

export default useCart