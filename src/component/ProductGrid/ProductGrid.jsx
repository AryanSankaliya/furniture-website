import React, { useState } from 'react'
import { FaShareAlt, FaHeart } from "react-icons/fa";
import "./ProductGrid.css"



function ProductGrid({ products }) {

      const [visibleCount, setVisibleCount] = useState(10);

    return (
        <>
            <div className="products">
                <h2 className="product-heading">Our Products</h2>

                <div className="product-grid">
                    {products.slice(0, visibleCount).map((item) => (
                        <div className="product-card" key={item.id}>
                            <div className="img-box">
                                <img src={item.images[0]} alt={item.title} />
                                <span className="discount-badge">
                                    -{Math.round(item.discount)}%
                                </span>

                                <div className="overlay">
                                    <button className="add-btn">Add to cart</button>
                                    <div className="icon-row">
                                        <div className="icon-item">
                                            <FaShareAlt className="icon" />
                                            <p className="icon-text">Share</p>
                                        </div>
                                        <div className="icon-item">
                                            <FaHeart className="icon" />
                                            <p className="icon-text">Like</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="brand">{item.title}</p>
                            <p className="name">{item.category}</p>
                            <div className="price-row">
                                <span className="price">Rp {item.price}</span>
                                <span className="old-price">
                                    Rp {(item.price * 1.8).toFixed(3)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="btn-container">
                <button className="btn" onClick={() => setVisibleCount((prev) => prev + 10)}>
                    Show More
                </button>
            </div>
        </>
    )
}

export default ProductGrid