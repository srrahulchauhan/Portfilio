import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ value }) => {
    const num = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/\d/g, '');
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;
        
        let start = 0;
        const duration = 2000;
        const increment = num / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= num) {
                setCount(num);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [num, isInView]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
    return (
        <section id="about" className="py-5 position-relative overflow-hidden">
            {/* Background Glow */}
            <div className="position-absolute top-50 start-0 translate-middle-y" style={{ 
                width: '500px', 
                height: '500px', 
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(3, 3, 3, 0) 70%)',
                zIndex: 0
            }}></div>

            <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title text-gradient d-inline-block mb-3">About Me</h2>
                    <div className="mx-auto bg-primary rounded-pill mb-4" style={{ width: '60px', height: '4px', opacity: 0.5 }}></div>
                </motion.div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <motion.div 
                            className="glass-card p-4 p-md-5"
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="row align-items-center g-5">
                                <div className="col-md-7 text-center text-md-start">
                                    <h3 className="fw-bold mb-4 fs-3">Building <span className="text-primary">Full Stack</span> Solutions</h3>
                                    <p className="fs-6 text-light opacity-75 mb-0" style={{ lineHeight: '1.8' }}>
                                        I am a dedicated <strong>MERN Full Stack Developer</strong> specializing in MongoDB, Express.js, React, and Node.js. My focus is on building scalable, high-performance web applications and bridging the gap between complex backend logic and elegant frontend design.
                                    </p>
                                </div>
                                <div className="col-md-5">
                                    <div className="row g-3">
                                        {[
                                            { label: 'Total Projects', value: '15+' },
                                            { label: 'Full Stack Apps', value: '5+' },
                                            { label: 'GitHub Repos', value: '30+' },
                                            { label: 'Tech Skills', value: '10+' }
                                        ].map((stat, i) => (
                                            <div className="col-6" key={i}>
                                                <motion.div 
                                                    className="p-3 text-center rounded-4 shadow-sm"
                                                    style={{ 
                                                        background: 'rgba(255, 255, 255, 0.03)', 
                                                        border: '1px solid rgba(255, 255, 255, 0.08)' 
                                                    }}
                                                    whileHover={{ y: -5, background: 'rgba(168, 85, 247, 0.08)', borderColor: 'rgba(168, 85, 247, 0.2)' }}
                                                >
                                                    <h4 className="fw-bold text-primary mb-1">
                                                        <AnimatedCounter value={stat.value} />
                                                    </h4>
                                                    <small className="text-muted fw-medium" style={{ fontSize: '0.7rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{stat.label}</small>
                                                </motion.div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
