import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
} from "../Constants/ProductConstants";

// PRODUCT LIST
export const productListReducer = (state = { products: [] }, action) => {
    console.log("🍎 reducer : action.payload ", action.type);

    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            console.log("📨 request");
            return {
                loading: true,
                products: [],
            };
        case PRODUCT_LIST_SUCCESS:
            console.log("😎 success");
            return {
                loading: false,
                products: action.payload,
            };
        case PRODUCT_LIST_FAIL:
            console.log("😭 fail");
            return {
                loading: false,
                error: action.payload,
            };
        default:
            console.log("😐 default");
            return state; // thats the default
    }
};
