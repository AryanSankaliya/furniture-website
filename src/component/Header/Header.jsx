import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import "./Header.css";
import { FaShoppingCart, FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";



function Header() {
    return (
        <div className='header'>
            {/* Left section */}
            <div className='header-left'>
                <img src={logo} alt="" className='logo' />
                <h2 className='brand-name'>Furniro</h2>
            </div>
            {/* middle section */}
            <nav className='header-middle'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/' className='nav-link'>Shop</Link>
                <Link to='/' className='nav-link'>About</Link>
                <Link to='/' className='nav-link'>Contact</Link>
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
                <Link to="/cart" className="icon">
                    <FaShoppingCart />
                </Link>
            </div>
        </div>
    )
}

export default Header;