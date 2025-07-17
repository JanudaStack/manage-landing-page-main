import React from 'react';

const Footer = () => {
    return (
        <section>
            <div>
                <h2>Simplify how your team works today.</h2>
                <button>Get Started</button>
            </div>
            <footer>
                <div className="search-box">
                    <input type="text" />
                    <button>GO</button>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Community</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div className="social-links">
                    <a href="#">
                        <img src="/images/icon-facebook.svg" alt="facebook" />
                    </a>
                    <a href="#">
                        <img src="/images/icon-youtube.svg" alt="youtube" />
                    </a>
                    <a href="#">
                        <img src="/images/icon-twitter.svg" alt="twitter" />
                    </a>
                    <a href="#">
                        <img src="/images/icon-pinterest.svg" alt="pinterest" />
                    </a>
                    <a href="#">
                        <img src="/images/icon-instagram.svg" alt="instagram" />
                    </a>
                </div>
                <a href="#home">
                    <img src="/images/logo.svg" alt="logo" />
                </a>
                <span className="footer-text">
                    Copyright 2025. All Rights Reserved.
                </span>
            </footer>
        </section>
    );
};

export default Footer;
