import { create } from "zustand";
import { toast } from "react-toastify";

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
  clearCheckout: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  getCartItemCount: () => number;
}

const useCartStore = create<StoreState>((set, get) => ({
  items: [],
  cart: [],
  addToCart: (item) => {
    const existingItem = get().cart.find((cart) => cart.id === item.id);
    if (existingItem) {
      set((state) => ({
        cart: state.cart.map((cart) =>
          cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
        ),
      }));
      toast.success("Item already in cart!");
    } else {
      set((state) => ({
        cart: [...state.cart, { ...item, quantity: 1 }],
      }));
      toast.success("Item Added to cart!");
    }
  },
  removeFromCart: (id: number) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    }));
    toast.info("Item removed from cart.");
  },
  clearCart: () => {
    set(() => ({
      cart: [],
    }));
    toast.info("Cart cleared.");
  },
  clearCheckout: () => {
    set(() => ({
      cart: [],
    }));
    toast.info("Order placed.");
  },
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
