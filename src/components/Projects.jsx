import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data';

const techIconMap = {
    html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
    api: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
};

const getTechIcon = (name) => {
    const n = name.toLowerCase();
    for (const key in techIconMap) {
        if (n.includes(key)) return techIconMap[key];
    }
    return '';
};

const Projects = () => {
    return (
        <section id="projects" className="py-5 position-relative overflow-hidden">
            {/* Background Glow */}
            <div className="position-absolute top-50 start-0 translate-middle-y" style={{ 
                width: '500px', 
                height: '500px', 
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
                    <h2 className="section-title text-gradient d-inline-block mb-3">Featured Projects</h2>
                    <div className="mx-auto bg-primary rounded-pill mb-4" style={{ width: '60px', height: '4px', opacity: 0.5 }}></div>
                </motion.div>
                
                <div className="row g-4 justify-content-center">
                    {projectsData.map((project, index) => (
                        <motion.div 
                            className="col-12 col-md-6 col-lg-4" 
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="glass-card h-100 overflow-hidden group" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                <motion.div 
                                    className="position-relative overflow-hidden"
                                    initial="rest"
                                    whileHover="hover"
                                >
                                    {project.image && (
                                        <motion.img
                                            src={project.image}
                                            alt={project.title}
                                            className="img-fluid"
                                            style={{ height: '220px', width: '100%', objectFit: 'cover' }}
                                            variants={{
                                                rest: { scale: 1 },
                                                hover: { scale: 1.05 }
                                            }}
                                            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                        />
                                    )}
                                    <motion.div 
                                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                        style={{ background: 'rgba(3, 3, 3, 0.6)', backdropFilter: 'blur(4px)' }}
                                        variants={{
                                            rest: { opacity: 0 },
                                            hover: { opacity: 1 }
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="d-flex gap-3">
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm">Demo</a>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-pill px-4 fw-bold shadow-sm">Code</a>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <div className="p-4">
                                    <h4 className="fw-bold mb-3 fs-5">{project.title}</h4>
                                    <p className="text-muted mb-4 small" style={{ lineHeight: '1.6' }}>{project.description}</p>
                                    <div className="d-flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((t) => (
                                            <span key={t} className="badge rounded-pill d-flex align-items-center gap-2 py-2 px-3" 
                                                style={{ 
                                                    background: 'rgba(255, 255, 255, 0.05)', 
                                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                                    fontSize: '0.7rem',
                                                    color: 'rgba(255, 255, 255, 0.8)'
                                                }}>
                                                {getTechIcon(t) && <img src={getTechIcon(t)} alt={t} width="14" height="14" />}
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
