import React from 'react';

const Footer = () => {
    return (
        <section>
            <div className="bg-[var(--orange-400)] py-20 px-10 flex flex-col items-center lg:justify-end lg:flex-row">
                <h2 className="text-white text-5xl text-center lg:pr-10 lg:w-2/4 lg:text-left lg:mr-auto">
                    Simplify how your team works today.
                </h2>
                <button className="btn bg-white text-orange-500 shadow-2xl mx-auto mt-20 lg:mt-0 lg:mx-0 ml-auto">
                    Get Started
                </button>
            </div>
            <footer className="bg-[var(--blue-950)] flex flex-col items-center gap-10 py-10 lg:flex-row lg:items-start lg:gap-0 lg:px-10">
                <form
                    action=""
                    name="emailForm"
                    className="w-full flex px-10 lg:px-0 lg:order-5 lg:justify-end"
                >
                    <input
                        type="email"
                        name=""
                        id=""
                        className="bg-white py-1 px-5 rounded-3xl w-full text-xs lg:w-3/5"
                        placeholder="Updates in your inbox..."
                    />
                    <button
                        type="submit"
                        className="bg-[var(--orange-400)] ml-2 py-1 px-3 rounded-3xl text-white"
                    >
                        GO
                    </button>
                </form>
                <div className="footer-nav-links flex w-full lg:order-3">
                    <menu className="flex justify-between w-full px-10 text-white leading-10">
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Pricing</a>
                            </li>
                            <li>
                                <a href="">Products</a>
                            </li>
                            <li>
                                <a href="">About Us</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="">Careers</a>
                            </li>
                            <li>
                                <a href="">Community</a>
                            </li>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                        </ul>
                    </menu>
                </div>

                <div className="social-links flex flex-col w-full items-center lg:w-4/5 lg:items-start lg:order-2 gap-10">
                    <menu className="flex gap-8 lg:mt-15">
                        <li>
                            <a href="">
                                <img
                                    src="/images/icon-facebook.svg"
                                    alt="facebook"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img
                                    src="/images/icon-youtube.svg"
                                    alt="youtube"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img
                                    src="/images/icon-twitter.svg"
                                    alt="twitter"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img
                                    src="/images/icon-pinterest.svg"
                                    alt="pinterest"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img
                                    src="/images/icon-instagram.svg"
                                    alt="instagram"
                                />
                            </a>
                        </li>
                    </menu>
                    <div className="footer-site-logo lg:-order-1">
                        <img src="/images/logo-white-text.svg" alt="" />
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
