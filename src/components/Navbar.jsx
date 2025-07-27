import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header>
            <a href="#home">
                <img src="/images/logo.svg" alt="site-logo" />
            </a>
            <nav>
                <div className="desktop-nav-container">
                    <ul className="desktop-nav-links">
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Community</a>
                        </li>
                    </ul>
                    <button className="btn">Get Started</button>
                </div>
                <button className="menu-btn" onClick={toggleMenu}>
                    <img
                        src="/images/icon-hamburger.svg"
                        alt="hamburger-icon"
                    />
                </button>
                <div
                    className={`mobile-nav-container ${
                        menuOpen
                            ? 'top-20 translate-y-0 opacity-100'
                            : '-translate-y-full opacity-0'
                    }`}
                >
                    <ul className="mobile-nav-links">
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Community</a>
                        </li>
                        <button className="btn mt-5">Get Started</button>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
