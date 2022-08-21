import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailReducer,
  productListReducer,
} from "./reducers/productReducers";
import { cartAddReducer } from "./reducers/cartReducers";

const middleware = [thunk];

const initialState = {};

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cartAdd       :cartAddReducer
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
