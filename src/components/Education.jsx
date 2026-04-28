import React from 'react';
import { educationData } from '../data';

const Education = () => {
    return (
        <section id="education" className="py-5">
            <div className="container py-4">
                <h2 className="text-center fw-bold mb-5 section-title">Education</h2>
                <div className="row justify-content-center g-4">
                    {educationData.map((edu) => (
                        <div className="col-md-6 col-lg-5" key={edu.id}>
                            <div className="card border-0 shadow-sm text-center p-4 edu-card">
                                <div className="mb-3">
                                    <span className="edu-icon-circle d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white" style={{ width: '56px', height: '56px', fontSize: '1.5rem' }}>
                                        🎓
                                    </span>
                                </div>
                                <h5 className="fw-bold">{edu.degree}</h5>
                                <h6 className="text-muted">{edu.institute}</h6>
                                <span className="badge bg-secondary rounded-pill mt-2">{edu.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
