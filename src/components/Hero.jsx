import React from 'react';

const Hero = () => {
    return (
        <section>
            <div className="visual-preferences grid grid-cols-1 justify-center lg:grid-cols-2">
                <div>
                    <img
                        src="/images/illustration-intro.svg"
                        alt="illus-intro-img"
                        className="w-full"
                    />
                    <img
                        src="/images/bg-tablet-pattern.svg"
                        alt="pattern-img"
                        className="absolute -z-10 top-0 left-0"
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
                    <button>Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
