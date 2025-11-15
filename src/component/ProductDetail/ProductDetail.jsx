import React ,{ useContext, useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './ProductDetail.css';
import { CartContext } from '../CartContext/CartProvider';


function ProductDetail({ product }) {

    const { addToCart } = useContext(CartContext);
    const [qty, setQty] = useState(1);
    const [showMsg, setShowMsg] = useState(false);

    const handleAddToCart = () => {
        addToCart(product, qty);
        setShowMsg(true);
        setTimeout(() => setShowMsg(false), 2000);
    };
    return (
        <div className="product-detail-container">
            {/* LEFT SIDE */}
            <div className="left-side">
                <div className="image-gallery">
                    {product.images.map((img, index) => (
                        <img src={img} key={index} alt={`thumb-${index}`} />
                    ))}
                </div>
                <div className="main-image">
                    <img src={product.images[0]} alt={product.title} />
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="right-side">
                <div className="product-info">
                    <h2>{product.title}</h2>
                    <p className="price">Rs. {product.price.toLocaleString()}</p>

                    <div className="review">
                        <span className="stars">
                            {Array.from({ length: 5 }, (_, i) => {
                                const rating = product.rating;
                                if (i + 1 <= rating) return <FaStar key={i} color="#ffb400" />;
                                if (i + 0.5 <= rating) return <FaStarHalfAlt key={i} color="#ffb400" />;
                                return <FaRegStar key={i} color="#ccc" />;
                            })}
                        </span>
                        <span className="review-count">
                            {(() => {
                                const num = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
                                return `${Math.floor(num / 1000)}k Customer Reviews`;
                            })()}
                        </span>
                    </div>

                    <p className="desc">{product.small_desc}</p>

                    {/* SIZE */}
                    <div className="size-section">
                        <p className="label">Size</p>
                        <div className="sizes">
                            <button className="size-btn">L</button>
                            <button className="size-btn">XL</button>
                            <button className="size-btn">XS</button>
                        </div>
                    </div>

                    {/* COLOR */}
                    <div className="color-section">
                        <p className="label">Color</p>
                        <div className="colors">
                            <span className="color purple"></span>
                            <span className="color black"></span>
                            <span className="color gold"></span>
                        </div>
                    </div>

                    {/* ADD TO CART */}
                    <div className="cart-row">
                        <div className="qty-box">
                            <button className='add-btn' onClick={() => setQty(prev => (prev > 1 ? prev - 1 : 1))}>-</button>
                            <span>{qty}</span>
                            <button  className='minus-btn' onClick={() => setQty(prev => prev + 1)}>+</button>
                        </div>
                        <button className="add-cart" onClick={handleAddToCart}>Add To Cart</button>
                    </div>

                    {/* META INFO */}
                    <div className="product-meta clean-meta">
                        <div className="meta-row">
                            <span className="meta-label">SKU</span>
                            <span className="meta-sep">:</span>
                            <span className="meta-value">SS{Math.floor(100 + Math.random() * 900)}</span>
                        </div>

                        <div className="meta-row">
                            <span className="meta-label">Category</span>
                            <span className="meta-sep">:</span>
                            <span className="meta-value">{product.category}</span>
                        </div>

                        <div className="meta-row">
                            <span className="meta-label">Tags</span>
                            <span className="meta-sep">:</span>
                            <span className="meta-value">Sofa, Chair, Home, Shop</span>
                        </div>

                        <div className="meta-row">
                            <span className="meta-label">Share</span>
                            <span className="meta-sep">:</span>
                            <div className="meta-icons">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {showMsg && <div className="toast"> Added to cart successfully!</div>}
        </div>
    );
}

export default ProductDetail;
