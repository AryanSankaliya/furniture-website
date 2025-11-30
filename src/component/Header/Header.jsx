import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import "./Header.css";
import { FaShoppingCart, FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import CartSideBar from '../CartSideBar/CartSideBar';

function Header() {
    const navigate = useNavigate();
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
    if (isCartOpen) {
        document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
        document.body.style.overflow = 'auto';   // Enable scroll
    }

    return () => {
        document.body.style.overflow = 'auto'; // Cleanup
    };
}, [isCartOpen]);

    return (
        <div className="header">

            {/* Left Section */}
            <div className="header-left">
                <img src={logo} alt="" className="header-logo" />
                <h2 className="header-brand" onClick={() => navigate('/home')}>Furniro</h2>
            </div>

            {/* Middle Section */}
            <nav className="header-nav">
                <Link to="/" className="header-link">Home</Link>
                <Link to="/shop" className="header-link">Shop</Link>
                <Link to="/about" className="header-link">About</Link>
                <Link to="/contact" className="header-link">Contact</Link>
            </nav>

            {/* Right Section */}
            <div className="header-icons">
                <Link to="/profile" className="header-icon">
                    <FaRegUser />
                </Link>
                <Link to="/search" className="header-icon">
                    <FaSearch />
                </Link>
                <Link to="/wishlist" className="header-icon">
                    <FaRegHeart />
                </Link>
                <Link
                    to="#"
                    className="header-icon"
                    onClick={() => setIsCartOpen(true)}
                >
                    <FaShoppingCart />
                </Link>
                {isCartOpen && (
                    <>
                        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
                        <CartSideBar
                            isOpen={isCartOpen}
                            onClose={() => setIsCartOpen(false)}
                        />
                    </>
                )}

            </div>

            {/* {isCartOpen && <CartSideBar onClose={() => setIsCartOpen(false)} />} */}
        </div>
    )
}

export default Header;
