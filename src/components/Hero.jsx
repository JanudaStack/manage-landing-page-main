import React from 'react';

const Hero = () => {
    return (
        <section>
            <div className=" grid grid-cols-1 gap-10 justify-center md:grid-cols-2 px-[2rem] md:py-[3rem] md:px-[4rem] lg:py-[5%] lg:px-[6%] overflow-x-hidden">
                <div>
                    <img
                        src="/images/illustration-intro.svg"
                        alt="illus-intro-img"
                        className="w-full"
                    />
                    <img
                        src="/images/bg-tablet-pattern.svg"
                        alt="pattern-img"
                        className="absolute -z-50 -top-30 md:-right-[10%] hidden md:block overflow-x-hidden"
                    />
                </div>
                <div className="hero-content flex flex-col gap-10 md:-order-1 md:pr-8 lg:pr-[9%]">
                    <h1 className="hero-header text-[var(--blue-950)] text-2xl text-center md:text-left md:text-3xl lg:text-5xl font-bold lg:leading-14">
                        Bring everyone together to build better products.
                    </h1>
                    <p className="hero-paragraph text-center text-slate-500 md:text-left lg:text-lg lg:w-5/6">
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
