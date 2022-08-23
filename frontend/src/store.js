import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailReducer,
  productListReducer,
} from "./reducers/productReducers";
import { cartAddReducer } from "./reducers/cartReducers";


const cartItemFromStorage = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItem')):[]

const middleware = [thunk];

const initialState = {
  cart:{cartItem:cartItemFromStorage}
};

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
