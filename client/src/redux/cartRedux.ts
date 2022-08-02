import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: <any>[],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      //@ts-ignore
      state.products.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.amount;
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;
      state.products = state.products.filter(
        (item: any, i: any) => i !== action.payload.index
      );
      state.totalPrice -=
        action.payload.product.price * action.payload.product.amount;
    },
    clear: (state) => {
      state.products = [];
      state.quantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, deleteProduct, clear } = cartSlice.actions;
export default cartSlice.reducer;
