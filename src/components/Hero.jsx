import React from 'react';

const Hero = () => {
    return (
        <section>
            <div className="hero-grid">
                <div>
                    <img
                        src="/images/illustration-intro.svg"
                        alt="illus-intro-img"
                        className="w-full"
                    />
                    <img
                        src="/images/bg-tablet-pattern.svg"
                        alt="pattern-img"
                        className="hero-bg-pattern-img"
                    />
                </div>
                <div className="hero-content">
                    <h1 className="hero-header">
                        Bring everyone together to build better products.
                    </h1>
                    <p className="hero-paragraph">
                        Manage makes it simple for software teams to plan
                        day-to-day tasks while keeping the larger team goals in
                        view.
                    </p>
                    <button className="btn mx-auto md:mx-0 md:mr-auto">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
