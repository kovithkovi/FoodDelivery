import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    console.log(itemId);
    if (!cartItem[itemId]) {
      // Fix: changed id to itemId
      console.log("item not in cart", itemId);
      setCartItem({ ...cartItem, [itemId]: 1 });
    } else {
      setCartItem({ ...cartItem, [itemId]: (cartItem[itemId] || 0) + 1 }); // Fix: changed item.Id to itemId
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

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
    cartItem, // Fix: added cartItem to contextValue for usage in other components.
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
