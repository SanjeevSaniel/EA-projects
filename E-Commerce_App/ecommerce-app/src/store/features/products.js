import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: null,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response?.data;
  }
  // async (id = null, { rejectWithValue }) => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/products");
  //     return response?.data;
  //   } catch (error) {
  //     // return rejectWithValue(error.response.data);
  //     return rejectWithValue("Couldn't fetch data, Invalid URL provided.");
  //   }
  // }
);

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "pending";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.products = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
