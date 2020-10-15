import reduxThunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import productsReducer from "./reducers/productsReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import {
  registerUser,
  updateUserDetailsReducer,
  UserDetailsReducer,
  userLoginReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  OrderDetailsReducer,
  orderListReducer,
  OrderPayReducer,
} from "./reducers/orderReducer";
import topProductsReducer from "./reducers/topProductsReducer";

const reducers = combineReducers({
  productsList: productsReducer,
  productDetails: productReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  registerUser: registerUser,
  userDetails: UserDetailsReducer,
  updateUser: updateUserDetailsReducer,
  orderCreate: orderCreateReducer,
  orderDetails: OrderDetailsReducer,
  orderPay: OrderPayReducer,
  orderList: orderListReducer,
  topProducts: topProductsReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
