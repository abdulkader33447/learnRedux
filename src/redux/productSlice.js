import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products", async () => {
  const resp = await fetch("https://dummyjson.com/products");
  const data = await resp.json();
  return data;
});

const initialState = {
  items: [],
  status: undefined,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "success";
    });
  },
});

export default productsSlice.reducer;
