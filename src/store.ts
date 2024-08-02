import { create } from "zustand";

interface Furniture {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface CartItem extends Furniture {
  quantity: number;
}

interface StoreState {
  items: Furniture[];
  cart: CartItem[];
  addToCart: (furniture: Furniture) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  getCartItemCount: () => number;
}

const useCartStore = create<StoreState>((set, get) => ({
  items: [],
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((cart) => cart.id === item.id);

      if (existingItem) {
        return {
          cart: state.cart.map((cart) =>
            cart.id === item.id
              ? { ...cart, quantity: cart.quantity + 1 }
              : cart
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...item, quantity: 1 }],
        };
      }
    }),
  removeFromCart: (id: number) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () =>
    set(() => ({
      cart: [],
    })),
  increaseQuantity: (id: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (id: number) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
  getCartItemCount: () => {
    const state = get();
    return state.cart.reduce(
      (acc: number, item: CartItem) => acc + item.quantity,
      0
    );
  },
}));

export { useCartStore };
