import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CartContext } from "../CartContext/CartProvider";
import "./ProductGrid.css"
import Toast from "../Toast/Toast"



function ProductGrid({ products = [], showHeading = true, showButton = true, pagination = false, itemsPerPage = 15 }) {

    const navigate = useNavigate();

    const [visibleCount, setVisibleCount] = useState(10);
    const { addToCart } = useContext(CartContext);
    const [liked, setLiked] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const visibleProducts = pagination
        ? products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
        : products.slice(0, visibleCount);

    const [showMsg, setShowMsg] = useState(false);
    const [msgText, setMsgText] = useState("");

    const [likedItems, setLikedItems] = useState([]);
    const [showWishlistMsg, setShowWishlistMsg] = useState(false);
    const [wishlistMsg, setWishlistMsg] = useState("");

    const handleAddToCart = ( e , item) => {
         e.stopPropagation();
        const cartItemAddtocart = {
            id: item.id,
            title: item.title || item.name,
            price: item.price || 0,
            images: item.images && item.images.length > 0 ? item.images : item.img ? [item.img] : [],
            qty: 1
        };


        addToCart(cartItemAddtocart);

        setMsgText(`${cartItemAddtocart.title} added to cart!`);
        setShowMsg(true);
        setTimeout(() => setShowMsg(false), 2000);
    };

    const handleLike = (e , item) => {
        e.stopPropagation();
        const isLiked = likedItems.includes(item.id);
        if (!isLiked) {
            setLikedItems([...likedItems, item.id]);
            setWishlistMsg(`${item.title || item.name} added to wishlist!`);
            setShowWishlistMsg(true);

            setTimeout(() => setShowWishlistMsg(false), 2000);
        } else {
            setLikedItems(likedItems.filter(id => id !== item.id));
        }


    }



    return (
        <>
            {showMsg && <Toast className="cart-msg">{msgText}</Toast>}
            {showWishlistMsg && <Toast className="wishlist-msg">{wishlistMsg}</Toast>}



            <div className="products">
                {showHeading && <h2 className="product-heading">Our Products</h2>}

                <div className="product-grid">
                    {visibleProducts.map((item) => (
                        <div className="product-card" key={item.id} onClick={()=> navigate(`/shop/${item.id}`)}>
                            <div className="img-box">
                                <img src={item.images && item.images.length > 0 ? item.images[0] : "https://via.placeholder.com/150"}
                                    alt={item.title} />
                                <span className="discount-badge">
                                    -{Math.round(item.discount)}%
                                </span>

                                <div className="overlay">
                                    <button className="add-btn" onClick={(e) => { handleAddToCart( e , item) }}>Add to cart</button>
                                    <div className="icon-row">
                                        <div className="icon-item">
                                            <FaShareAlt className="icon" />
                                            <p className="icon-text">Share</p>
                                        </div>
                                        <div
                                            className={`icon-item ${likedItems.includes(item.id) ? "liked" : ""}`}
                                            onClick={(e) => handleLike(e , item)}
                                        >
                                            {likedItems.includes(item.id) ? <FaHeart className="icon" /> : <FaRegHeart className="icon" />}
                                            <p className="icon-text">{likedItems.includes(item.id) ? "Liked" : "Like"}</p>
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

            {!pagination && showButton && visibleCount < products.length && (
                <div className="showmore-btn-container">
                    <button className="showmore-btn" onClick={() => setVisibleCount((prev) => prev + 10)}>
                        Show More
                    </button>
                </div>
            )}

            {pagination && (
                <div className="pagination-btn-container">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={`pagination-btn ${currentPage === i + 1 ? "active" : ""}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {currentPage < totalPages && (
                        <button
                            className="pagination-btn"
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    )}

                </div>
            )}

        </>
    )
}

export default ProductGrid