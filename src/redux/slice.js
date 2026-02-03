import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // state.value += 1;
      console.log(action);
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    clearItems: (state) => {
      state.value = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = addToCart.actions;
export default addToCart.reducer;
