import React from 'react';

const Hero = () => {
    return (
        <section>
            <div className=" grid grid-cols-1 justify-center lg:grid-cols-2 lg:py-[5rem] lg:px-[8rem] overflow-x-hidden">
                <div>
                    <img
                        src="/images/illustration-intro.svg"
                        alt="illus-intro-img"
                        className="w-full"
                    />
                    <img
                        src="/images/bg-tablet-pattern.svg"
                        alt="pattern-img"
                        className="absolute -z-50 -top-50 -right-50"
                    />
                </div>
                <div className="hero-content flex flex-col gap-10 lg:-order-1 lg:mr-25 px-4">
                    <h1 className="hero-header text-[var(--blue-950)] text-2xl text-center lg:text-5xl font-bold lg:leading-14">
                        Bring everyone together to build better products.
                    </h1>
                    <p className="hero-paragraph text-center text-slate-500 lg:text-lg lg:w-5/6">
                        Manage makes it simple for software teams to plan
                        day-to-day tasks while keeping the larger team goals in
                        view.
                    </p>
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
