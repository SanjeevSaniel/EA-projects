import configureStore from "./store/configureStore";

import { addToCart } from "./store/cart";

const store = configureStore();

store.dispatch(addToCart({ name: "Macbook" }));

console.log(store.getState());
