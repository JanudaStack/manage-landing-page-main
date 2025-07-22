import React from 'react';

const About = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-30 lg:mt-0">
            <div className="about-content">
                <h2 className="about-header">What's different about Manage?</h2>
                <p className="about-description">
                    Manage provides all the functionality your team needs,
                    without the complexity. Our software is tailor-made for
                    modern digital product teams.
                </p>
                <img
                    src="/images/bg-tablet-pattern.svg"
                    alt="bg-tablet-pattern"
                    className="bg-pattern-tablet"
                />
            </div>
            <div className="about-list-content">
                <div>
                    <div className="list-header">
                        <span className="span-number">01</span>
                        <span className="span-text">
                            Track company-wide progress
                        </span>
                    </div>
                    <p className="about-content-p">
                        See how your day-to-day tasks fit into the wider vision.
                        Go from tracking progress at the milestone level all the
                        way done to the smallest of details. Never lose sight of
                        the bigger picture again.
                    </p>
                </div>
                <div>
                    <div className="list-header">
                        <span className="span-number">02</span>
                        <span className="span-text">
                            Advanced built-in reports
                        </span>
                    </div>
                    <p className="about-content-p">
                        Set internal delivery estimates and track progress
                        toward company goals. Our customisable dashboard helps
                        you build out the reports you need to keep key
                        stakeholders informed.
                    </p>
                </div>
                <div>
                    <div className="list-header">
                        <span className="span-number">03</span>
                        <span className="span-text">
                            Everything you need in one place
                        </span>
                    </div>
                    <p className="about-content-p">
                        Stop jumping from one service to another to communicate,
                        store files, track tasks and share documents. Manage
                        offers an all-in-one team productivity solution.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
