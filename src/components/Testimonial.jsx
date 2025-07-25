import React, { useState } from 'react';
import { clients } from '../../constants';

const Testimonial = () => {
    const [testimonialData] = useState(clients);
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex < testimonialData.length) {
            setSlideIndex(slideIndex + 1); // Increment the slide index
        } else {
            setSlideIndex(1); // Reset to the first slide
        }
    };

    // Example usage of nextSlide
    React.useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Automatically change slides every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    });

    return (
        <section className="flex flex-col justify-center mt-20 mb-30 gap-10 ">
            <div className="flex flex-col items-center md:px-20 gap-10">
                <h2 className="about-header text-2xl text-center">
                    What they've said
                </h2>
                {testimonialData.map((client, index) => (
                    <div
                        key={client.id}
                        className={`flex flex-col items-center gap-4 ${
                            slideIndex === index + 1 ? 'block' : 'hidden'
                        }`}
                    >
                        <img
                            src={client.img}
                            alt="avatar"
                            className="w-20 relative z-[999] top-15"
                        />
                        <div className="bg-[var(--gray-50)] flex flex-col gap-4 justify-center items-center pb-10 pt-20 w-3/4 lg:w-2/3">
                            <h3>{client.name}</h3>
                            <p className="px-0 text-center md:w-4/8 md:text-xl">
                                {client.review}
                            </p>
                        </div>

                        <div className="flex gap-2">
                            {testimonialData.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2.5 h-2.5 border-amber-600 border-1 rounded-2xl ${
                                        slideIndex === index + 1
                                            ? 'bg-amber-600'
                                            : ''
                                    }`}
                                    onClick={() => setSlideIndex(index + 1)}
                                ></button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn mx-auto">Get Started</button>
        </section>
    );
};

export default Testimonial;
