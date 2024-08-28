import React, { useState } from 'react';
import navLogo from '../assets/navLogo.svg';
import searchIcon from '../assets/searchIcon.svg';
import cartIcon from '../assets/shoppingcart.svg';
import LISU from '../assets/login-avatar.svg';
import '../styles/NavBar.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <NavLink to="/" className="nav-logo">
                    <img src={navLogo} alt="navLogo" />
                </NavLink>
            </div>

            <div className={`nav-center ${isOpen ? 'open' : ''}`}>
                <ul>
                    <NavLink to="/mens" className={({ isActive }) => (isActive ? 'active' : '')}><li>Mens</li></NavLink>
                    <NavLink to="/womens" className={({ isActive }) => (isActive ? 'active' : '')}><li>Womens</li></NavLink>
                    <NavLink to="/snowboards" className={({ isActive }) => (isActive ? 'active' : '')}><li>Snowboards</li></NavLink>
                    <NavLink to="/splitboards" className={({ isActive }) => (isActive ? 'active' : '')}><li>Splitboards</li></NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}><li>Contact</li></NavLink>
                </ul>
            </div>

            <div className="nav-right">
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <span className="search-icon"><img src={searchIcon} className="seach-icon"></img></span>
                </div>
                <div className="user-icons">
                    <div>
                        <a href=""><img className="user cart" src={cartIcon}></img></a>
                    </div>
                    <div>
                        <a href=""><img className="user login" src={LISU}></img></a>
                    </div>
                </div>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? (
                    <span className="close-icon">&#x2715;</span>  // Unicode for "X" (✖️)
                ) : (
                    <>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </>
                )}
            </div>
        </nav>
    );
}