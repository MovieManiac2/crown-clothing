import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCarOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  const showCartDropdown = () => {
    setIsCartOpen(true);
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
