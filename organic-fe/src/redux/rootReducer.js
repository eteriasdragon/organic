import { combineReducers } from "redux";
import {products} from "./reducers/products.js";
import {news} from "./reducers/news.js";
import {about} from "./reducers/about.js";
import {reviews} from "./reducers/reviews.js";
import {statistics} from "./reducers/statistics.js";
import {discounts} from "./reducers/discounts.js";
import {organicPros} from "./reducers/organic-pros.js";
import {positions} from "./reducers/positions.js";
import {cart} from "./reducers/cart.js";
import {orders} from "./reducers/orders.js";

// Reducers
export const rootReducer = combineReducers({products, news, about, reviews, statistics, discounts, organicPros, positions, cart, orders});
