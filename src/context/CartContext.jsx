import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";
import AuthContext from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [cartItems, setCartItems] = useState([]);
  const [clean, setClean] = useState(false);
  const [totalCart, setTotalCart] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const addToCart = (item, quantity) => {
    let itemInCart = cartItems.find((itemCart) => itemCart.id === item.id);
    if (itemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: quantity }]);
    }
  };
  const deleteItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
    console.log(updatedCart);
    if (updatedCart.length === 0) {
      setClean(true);
    }
    // setClean(true);
  };
  const getTotal = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.quantity * cartItem.price;
    });
    setTotalCart(total.toFixed(2));
  };
  const numberOfItems = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.quantity;
    });
    setTotalItems(total);
  };

  const getCartItems = () => {
    if (user) {
      axios
        .get(`${api}/cart/${user.id}`)
        .then((res) => {
          console.log(res);

          setCartItems(res.data.cart);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const updatedCart = () => {
    axios
      .put(`${api}/cart/${user.id}`, { cart: cartItems })
      .then((res) => {
        if (res.status === 200) {
          // console.log("sucess updated");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const contextData = {
    addToCart,
    cartItems,
    deleteItem,
    totalCart,
    totalItems,
  };

  useEffect(() => {
    getTotal();
    numberOfItems();
    if (cartItems.length > 0 || clean) {
      updatedCart();
      setClean(false);
    }
  }, [cartItems]);

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
  );
};

export default CartContext;
