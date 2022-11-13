import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./Pagination";
// import products from "../../data/Products"; 🙂
import axios from "axios";

const ShopSection = () => {
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

    return (
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col-lg-12 col-md-12 article">
                        <div className="shopcontainer row">
                            {products.map((product) => (
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
                            ))}
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopSection;
