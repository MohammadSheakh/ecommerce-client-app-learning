import React from "react";
import "./App.css";
//import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
} from "react-router-dom";
import HomeScreen from "../src/screens/HomeScreen";
import SingleProduct from "../src/screens/SingleProduct";
import Login from "../src/screens/Login";
import Register from "../src/screens/Register";
import CartScreen from "../src/screens/CartScreen";
import ShippingScreen from "../src/screens/ShippingScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import PaymentScreen from "../src/screens/PaymentScreen";
import PlaceOrderScreen from "../src/screens/PlaceOrderScreen";
import OrderScreen from "../src/screens/OrderScreen";
import NotFound from "../src/screens/NotFound";
function App() {
    return (
        <Router>
            {" "}
            <Routes>
                <Route path="/" component={HomeScreen} exact />{" "}
                <Route path="/products/:id" component={SingleProduct} />{" "}
                <Route path="/login" component={Login} />{" "}
                <Route path="/register" component={Register} />{" "}
                <Route path="/profile" component={ProfileScreen} />{" "}
                <Route path="/cart/:id?" component={CartScreen} />{" "}
                <Route path="/shipping" component={ShippingScreen} />{" "}
                <Route path="/payment" component={PaymentScreen} />{" "}
                <Route path="/placeorder" component={PlaceOrderScreen} />{" "}
                <Route path="/order" component={OrderScreen} />
                <Route path="*" component={NotFound} />{" "}
            </Routes>{" "}
        </Router>
    );
}

export default App;
