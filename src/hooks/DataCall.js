import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { listProduct } from "../Redux/Actions/ProductAction";

const DataCall = () => {
    console.log("Data is calling ... ");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProduct()); // action  ke dispatch korte hoy
    }, [dispatch]);
};

export default DataCall;
