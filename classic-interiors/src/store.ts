import { create } from "zustand";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  getCartItemCount: () => number;
  getTotalPrice: () => number;
}

const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addItem: (item: CartItem) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        console.log(`Increasing quantity for item ${item.id}`);
        return {
          items: state.items.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      console.log(`Adding new item ${item.id}`);
      return {
        items: [...state.items, item],
      };
    });
    console.log("Current state after addItem:", get().items);
  },
  removeItem: (id: number) => {
    console.log(`Removing item ${id}`);
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
    console.log("Current state after removeItem:", get().items);
  },
  increaseQuantity: (id: number) => {
    console.log(`Increasing quantity for item ${id}`);
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
    console.log("Current state after increaseQuantity:", get().items);
  },
  decreaseQuantity: (id: number) => {
    console.log(`Decreasing quantity for item ${id}`);
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }));
    console.log("Current state after decreaseQuantity:", get().items);
  },
  getCartItemCount: () => {
    const state = get();
    const itemCount = state.items.reduce(
      (acc: number, item: CartItem) => acc + item.quantity,
      0
    );
    console.log("Cart item count:", itemCount);
    return itemCount;
  },
  getTotalPrice: () => {
    const state = get();
    const totalPrice = state.items.reduce(
      (acc: number, item: CartItem) => acc + item.price * item.quantity,
      0
    );
    console.log("Total price:", totalPrice);
    return totalPrice;
  },
}));

export { useCartStore };
