import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./Pagination";
// import products from "../../data/Products"; 🙂
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductAction";
import DataCall from "../../hooks/DataCall";

function ShopSection() {
    /*
    const [products, setProducts] = useState([]); // onek gula product jehetu .. ejonno array
    
    useEffect(() => {
        console.log("1️⃣ Hello from homeComponent > ShopSection : 😀 ");
        const fetchProducts = async () => {
            // karon amake kono ekta kajer jonno await korte hobe
            const { data } = await axios.get("/api/products");
            setProducts(data);
        };
        fetchProducts(); // function likhlei hobe na .. call o korte hobe ..
    }, []);
*/

    const dispatch = useDispatch();

    // useSelector diye redux er state theke amar jei node dorkar .. sheta niye ashte hobe ..
    // ami productList node e Reducer ta assign korsilam .. tar mane productList e amar ei related
    // data ase ..

    const productList1 = useSelector((state) => state.productList); // jei node e data rakhsi ..
    // sheta return korlam ..
    const { loading, error, products } = productList1;
    console.log("products : ⚡", products);

    useEffect(() => {
        console.log("Action is dispatched ! 🤝");
        dispatch(listProduct()); // action  ke dispatch korte hoy
        // problem in 1:41:24 😪🔥⌛
    }, [dispatch]);

    // DataCall();

    return (
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col-lg-12 col-md-12 article">
                        <div className="shopcontainer row">
                            {/* {loading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p>error : {error}</p>
                            ) : (
                                <>show all products and map product</>
                            )} */}
                            {loading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p>error : {error}</p>
                            ) : (
                                <>
                                    {products.map((product) => (
                                        <div
                                            className="shop col-lg-4 col-md-6 col-sm-6"
                                            key={product._id}
                                        >
                                            <div className="border-product">
                                                <Link
                                                    to={`/products/${product._id}`}
                                                />
                                                <div className="shopBack">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                    />

                                                    <div className="shoptext">
                                                        <p>
                                                            <Link
                                                                to={`/products/${product._id}`}
                                                            >
                                                                {product.name}
                                                            </Link>
                                                        </p>
                                                        <Rating
                                                            value={
                                                                product.rating
                                                            }
                                                            text={`${product.numReviews} reviews`}
                                                        />

                                                        <h3>{product.price}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            )}
                            {/* {products.map((product) => (
                                <div
                                    className="shop col-lg-4 col-md-6 col-sm-6"
                                    key={product._id}
                                >
                                    <div className="border-product">
                                        <Link to={`/products/${product._id}`} />
                                        <div className="shopBack">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                            />

                                            <div className="shoptext">
                                                <p>
                                                    <Link
                                                        to={`/products/${product._id}`}
                                                    >
                                                        {product.name}
                                                    </Link>
                                                </p>
                                                <Rating
                                                    value={product.rating}
                                                    text={`${product.numReviews} reviews`}
                                                />

                                                <h3>{product.price}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))} */}
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopSection;
