import { combineReducers } from "redux";
import {products} from "./reducers/products.js";

// Reducers
export const rootReducer = combineReducers({products: products});
