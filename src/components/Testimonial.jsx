import React from 'react';

const Testimonial = () => {
    return (
        <section className="flex flex-col justify-center my-30 gap-10">
            <div className="flex flex-col items-center md:px-20 gap-10">
                <h2 className="about-header text-2xl text-center">
                    What they've said
                </h2>
                <img
                    src="/images/avatar-ali.png"
                    alt="avatar"
                    className="w-20"
                />
                <h3>Ali Bravo</h3>
                <p className="px-10 text-center md:w-4/8 md:text-xl">
                    “We have been able to cancel so many other subscriptions
                    since using Manage. There is no more cross-channel confusion
                    and everyone is much more focused.”
                </p>
            </div>
            <button className="btn mx-auto">Get Started</button>
        </section>
    );
};

export default Testimonial;
