import React from 'react';

const Footer = () => {
    return (
        <section>
            <div className="bg-[var(--orange-400)] py-20 px-10 flex flex-col items-center lg:justify-end lg:flex-row">
                <h2 className="text-white text-5xl text-center lg:pr-10 lg:w-2/4 lg:text-left lg:mr-auto">
                    Simplify how your team works today.
                </h2>
                <button className="btn bg-white shadow-2xl mx-auto mt-20 lg:mt-0 lg:mx-0 ml-auto">
                    Get Started
                </button>
            </div>
            <footer className="bg-[var(--blue-950)] py-10">
                {/* Search bar */}
                <div className="flex flex-col gap-8">
                    <div className="flex justify-center px-5">
                        <input
                            type="text"
                            placeholder="Update your inbox"
                            className="bg-white rounded-2xl py-1 px-3 w-2/3"
                        />
                        <button className="bg-[var(--orange-400)] rounded-2xl py-1 px-4 ml-1">
                            GO
                        </button>
                    </div>
                    {/* Footer navlinks */}
                    <div className="flex justify-between w-2/3 mx-auto text-white leading-10">
                        <ul className="mr-auto ">
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
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8 pt-8">
                    <a href="#home">manage</a>
                    <div className="-order-1">
                        <ul className="flex gap-5">
                            <li>
                                <a href="">
                                    <img
                                        src="/images/icon-facebook.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        src="/images/icon-youtube.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        src="/images/icon-twitter.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        src="/images/icon-pinterest.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img
                                        src="/images/icon-instagram.svg"
                                        alt=""
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
