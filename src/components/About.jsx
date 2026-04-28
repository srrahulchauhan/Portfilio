import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-5 section-alt">
            <div className="container py-4">
                <h2 className="text-center fw-bold mb-5 section-title">About Me</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm p-4 about-card">
                            <p className="fs-5">
                                I am a passionate <strong>Frontend Developer</strong> who loves converting designs into responsive websites and continuously learning new frontend technologies.
                            </p>
                            <p className="text-muted mb-0">
                                My focus is on writing clean, elegant, and efficient code. I stay updated with the latest trends in web development to deliver the best user experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
