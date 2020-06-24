import { createStore } from "redux";
import { navReducer } from "./navReducer";

const store = createStore(navReducer);

export default store;
