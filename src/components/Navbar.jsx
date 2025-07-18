import React from 'react';

const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-4 px-3 z-50 w-full">
            <a href="#home">
                <img src="/images/logo.svg" alt="site-logo" />
            </a>
            <nav className="lg:w-full">
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
                    <button className="get-started bg-[var(--orange-400)] py-2 px-4 rounded-[2rem]">
                        Get Started
                    </button>
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
