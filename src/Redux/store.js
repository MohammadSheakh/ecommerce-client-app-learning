import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer } from "./Reducers/ProductReducers";

// 1:27:54
const reducer = combineReducers({
    productList: productListReducer,
    // problem in 1:35:02 🔥😪⌛
});

const initialState = {}; // initalState ta onno file theke niye asha convenient ..

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
