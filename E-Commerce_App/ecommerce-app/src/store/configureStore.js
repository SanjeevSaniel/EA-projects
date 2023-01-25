import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
import productsReducer from "./features/products";
import { productsAPI } from "./features/productsAPI";

export const configStore = () => {
  return configureStore({
    reducer: {
      products: productsReducer,
      [productsAPI.reducerPath]: productsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsAPI.middleware),
  });
};
