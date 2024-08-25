import React, { useState } from 'react';
import navLogo from '../assets/navLogo.svg';
import searchIcon from '../assets/searchIcon.svg';
import cartIcon from '../assets/shoppingcart.svg';
import LISU from '../assets/login-avatar.svg';
import '../styles/NavBar.css';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <div className="nav-logo">
                    <img src={navLogo} alt="navLogo" />
                </div>
            </div>

            <div className={`nav-center ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="">Mens</a></li>
                    <li><a href="">Womens</a></li>
                    <li><a href="">Snowboards</a></li>
                    <li><a href="">Splitboards</a></li>
                    <li><a href="">Contact</a></li>
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