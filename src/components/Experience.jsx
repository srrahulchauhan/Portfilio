import React from 'react';
import { experienceData } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="py-5 section-alt">
            <div className="container py-4">
                <h2 className="text-center fw-bold mb-5 section-title">Experience</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {experienceData.map((exp) => (
                            <div key={exp.id} className="card border-0 shadow-sm p-4 mb-4 exp-card">
                                <div className="d-flex justify-content-between flex-wrap mb-2">
                                    <h5 className="fw-bold mb-0">{exp.role}</h5>
                                    <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">{exp.period}</span>
                                </div>
                                <h6 className="text-primary mb-3">{exp.company}</h6>
                                <p className="text-muted mb-0">{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
