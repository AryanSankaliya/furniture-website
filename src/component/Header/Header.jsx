import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import "./Header.css";
import { FaShoppingCart, FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import CartSideBar from '../CartSideBar/CartSideBar';



function Header() {
   const navigate = useNavigate(); 

    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className='header'>
            {/* Left section */}
            <div className='header-left'>
                <img src={logo} alt="" className='logo' />
                <h2 className='brand-name' onClick={ () => navigate('/home')}>Furniro</h2>
            </div>
            {/* middle section */}
            <nav className='header-middle'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/shop' className='nav-link'>Shop</Link>
                <Link to='/about' className='nav-link'>About</Link>
                <Link to='/contact' className='nav-link'>Contact</Link>
            </nav>

            {/* header-rigth */}
            <div className='header-right'>
                <Link to="/profile" className="icon">
                    <FaRegUser />
                </Link>
                <Link to="/search" className="icon">
                    <FaSearch />
                </Link>
                <Link to="/wishlist" className="icon">
                    <FaRegHeart />
                </Link>
                <Link to="#" className="icon" onClick={() => setIsCartOpen(true)}>
                    <FaShoppingCart />
                </Link>
            </div>

            {isCartOpen && <CartSideBar onClose={() => setIsCartOpen(false)} />}

        </div>
    )
}

export default Header;