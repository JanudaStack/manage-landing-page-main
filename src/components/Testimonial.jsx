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
        <section className="testimonial-section">
            <div className="testimonial-wrapper">
                <h2 className="testimonial-heading">What they've said</h2>
                {testimonialData.map((client, index) => (
                    <div
                        key={client.id}
                        className={`testimonial-item ${
                            slideIndex === index + 1 ? 'flex' : 'hidden'
                        }`}
                    >
                        <img
                            src={client.img}
                            alt="avatar"
                            className="testimonial-avatar"
                        />
                        <div className="testimonial-content">
                            <h3>{client.name}</h3>
                            <p className="testimonial-name">{client.review}</p>
                        </div>

                        <div className="testimonial-nav">
                            {testimonialData.map((_, index) => (
                                <button
                                    key={index}
                                    className={`testimonial-nav-button  ${
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
            <button className="testimonial-action btn mx-auto">
                Get Started
            </button>
        </section>
    );
};

export default Testimonial;
