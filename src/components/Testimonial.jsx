import React from 'react';

const Testimonial = () => {
    return (
        <section>
            <div className="flex flex-col items-center">
                <h2 className="about-header text-2xl text-center">
                    What they've said
                </h2>
                <img
                    src="/images/avatar-ali.png"
                    alt="avatar"
                    className="w-20"
                />
                <h3>Ali Bravo</h3>
                <p className="px-10 text-center">
                    “We have been able to cancel so many other subscriptions
                    since using Manage. There is no more cross-channel confusion
                    and everyone is much more focused.”
                </p>
            </div>
            <button className="btn">Get Started</button>
        </section>
    );
};

export default Testimonial;
