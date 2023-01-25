import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (cart, action) => {
      cart.push({
        _id: ++lastId,
        name: action.payload.name,
        image: action.payload.image,
        demand: action.payload.demand,
        rating: action.payload.rating,
        newPrice: action.payload.newPrice,
        oldPrice: action.payload.oldPrice,
        category: action.payload.category,
      });
    },
  },
});

export const { addToCart } = slice.actions;
export default slice.reducer;
