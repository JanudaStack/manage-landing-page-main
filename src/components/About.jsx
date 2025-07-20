import React from 'react';

const About = () => {
    return (
        <section>
            <div className="about-content">
                <h2 className="about-header text-2xl text-center">
                    What's different about Manage?
                </h2>
                <p className="text-center text-slate-500">
                    Manage provides all the functionality your team needs,
                    without the complexity. Our software is tailor-made for
                    modern digital product teams.
                </p>
            </div>
            <div className="flex flex-col gap-4 pt-[4rem] px-[2rem]">
                <div>
                    <h3 className="text-center">
                        <span className="span-text">01</span>
                        Track company-wide progress
                    </h3>
                    <p className="pt-5">
                        See how your day-to-day tasks fit into the wider vision.
                        Go from tracking progress at the milestone level all the
                        way done to the smallest of details. Never lose sight of
                        the bigger picture again.
                    </p>
                </div>
                <div>
                    <h3>
                        <span className="span-text">02</span>Advanced built-in
                        reports
                    </h3>
                    <p className="pt-5">
                        Set internal delivery estimates and track progress
                        toward company goals. Our customisable dashboard helps
                        you build out the reports you need to keep key
                        stakeholders informed.
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-center">
                        <h3 className="text-center bg-orange-100 rounded-r-[2rem] relative h-10 ">
                            <span className="span-text absolute top-0 -left-10">
                                03
                            </span>
                            Everything you need in one place
                        </h3>
                    </div>

                    <p className="pt-5">
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
