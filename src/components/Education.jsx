import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../data';

const Education = () => {
    return (
        <section id="education" className="py-5 position-relative overflow-hidden">
            {/* Background Glow */}
            <div className="position-absolute top-50 end-0 translate-middle-y" style={{ 
                width: '400px', 
                height: '400px', 
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(3, 3, 3, 0) 70%)',
                zIndex: 0
            }}></div>

            <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title text-gradient d-inline-block mb-3">Education</h2>
                    <div className="mx-auto bg-primary rounded-pill mb-4" style={{ width: '60px', height: '4px', opacity: 0.5 }}></div>
                </motion.div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {educationData.map((edu, index) => (
                            <motion.div 
                                key={edu.id} 
                                className="timeline-item mb-4"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="glass-card p-4 d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                    <div className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
                                        style={{ 
                                            width: '70px', 
                                            height: '70px', 
                                            background: 'rgba(168, 85, 247, 0.1)',
                                            border: '2px solid rgba(168, 85, 247, 0.2)' 
                                        }}>
                                        <span style={{ fontSize: '2rem' }}>🎓</span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-2">
                                            <h4 className="fw-bold text-white mb-0 fs-4">{edu.degree}</h4>
                                            <span className="badge rounded-pill px-3 py-2" style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                                {edu.year}
                                            </span>
                                        </div>
                                        <h5 className="text-primary fw-500 mb-0 fs-5">{edu.institute}</h5>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
