import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="py-5 position-relative overflow-hidden">
            {/* Background Glow */}
            <div className="position-absolute top-50 start-0 translate-middle-y" style={{ 
                width: '400px', 
                height: '400px', 
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(3, 3, 3, 0) 70%)',
                zIndex: 0
            }}></div>

            <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title text-gradient d-inline-block mb-3">Professional Experience</h2>
                    <div className="mx-auto bg-primary rounded-pill mb-4" style={{ width: '60px', height: '4px', opacity: 0.5 }}></div>
                </motion.div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {experienceData.map((exp, index) => (
                            <motion.div 
                                key={exp.id} 
                                className="timeline-item mb-4"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="glass-card p-4" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-3">
                                        <div>
                                            <h4 className="fw-bold text-white mb-1 fs-4">{exp.role}</h4>
                                            <h5 className="text-primary fw-600 fs-5">{exp.company}</h5>
                                        </div>
                                        <span className="badge rounded-pill px-4 py-2" style={{ background: 'rgba(168, 85, 247, 0.1)', color: 'var(--primary)', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-muted fs-6 mb-0" style={{ lineHeight: '1.6' }}>{exp.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
