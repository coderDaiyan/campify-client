import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../../types/product";
import { RootState } from "../../store";

interface CartState {
  items: Array<TProduct & { quantity: number; totalPrice: number }>;
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push({
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.price,
      });
    },
    deleteFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item._id === action.payload);
      console.log(action);
      if (item && item.quantity < item.stockQuantity) {
        item.quantity += 1;
        item.totalPrice = item.price * item.quantity;
      }
    },
    decreseQuantity: (state, action) => {
      console.log(action.payload);
      const item = state.items.find((item) => item._id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.price * item.quantity;
      }
    },
  },
});

export const { addToCart, deleteFromCart, increaseQuantity, decreseQuantity } =
  cartSlice.actions;

export const cartItemCount = (state: RootState) => state.cart.items.length;
export const subTotalPrice = (state: RootState) => {
  const totalPrice = state.cart.items.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
  return totalPrice;
};

export default cartSlice.reducer;
