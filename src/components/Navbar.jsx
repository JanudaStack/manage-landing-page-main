import React from 'react';

const Navbar = () => {
    return (
        <header>
            <a href="#home">
                <img src="/images/logo.svg" alt="site-logo" />
            </a>
            <nav>
                <div className="desktop-nav-links hidden lg:flex">
                    <ul className="flex items-center gap-5 mx-auto">
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
                <button className="menu-btn flex lg:hidden">
                    <img
                        src="/images/icon-hamburger.svg"
                        alt="hamburger-icon"
                    />
                </button>
            </nav>
        </header>
    );
};

export default Navbar;
