import { combineReducers } from "redux";
import cartReducer from "./features/cart";
import productsReducer from "./features/products";
import { productsAPI } from "./features/productsAPI";

export default combineReducers({
  cart: cartReducer,
  products: productsReducer,
  [productsAPI.reducerPath]: productsAPI.reducer,
});
