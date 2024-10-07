import { createContext, useEffect, useState, useCallback } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = useCallback((itemId) => {
    console.log(itemId);
    setCartItem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItem((prev) => {
      if (prev[itemId] <= 1) {
        const { [itemId]: _, ...rest } = prev; // Remove item if count is 1 or less
        return rest;
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  }, []);

  const handleCartItem = () => {
    const itemCount = Object.values(cartItem).reduce(
      (sum, count) => sum + count,
      0
    );
    return {
      hasItems: itemCount > 0,
      itemCount,
    };
  };

  const getTotalCartAmount = () => {
    return Object.keys(cartItem).reduce((totalAmount, itemId) => {
      const item = food_list.find((item) => item._id === itemId);
      return totalAmount + (item ? item.price * cartItem[itemId] : 0);
    }, 0);
  };

  useEffect(() => {
    console.log("cartItem changed", cartItem);
  }, [cartItem]);

  const contextValue = {
    food_list,
    cartItem,
    addToCart,
    removeFromCart,
    setCartItem,
    handleCartItem,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
