import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
}

interface CartProviderProps {
  children: ReactNode;
}

const initialState: CartState = {
  items: [],
};

const CartContext = createContext<
  { state: CartState; dispatch: React.Dispatch<any> } | undefined
>(undefined);

const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find((i) => i.id === action.item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        items: [...state.items, action.item],
      };
    case "REMOVE_ITEM":
      return {
        items: state.items.filter((item) => item.id !== action.id),
      };
    case "INCREASE_QUANTITY":
      return {
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        items: state.items.map((item) =>
          item.id === action.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
