import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../../types/product";
import { RootState } from "../../store";

interface ProductState {
  products: Array<TProduct>;
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      state.products = action.payload;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const { loadProducts, deleteProduct } = productSlice.actions;

export const maximumPrice = (state: RootState) => {
  const max = state.product?.products?.reduce(
    (acc, curr) => (curr.number > acc.number ? curr : acc),
    {} as TProduct
  );
  return max;
};

export default productSlice.reducer;
