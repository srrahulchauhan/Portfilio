import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data';

const iconMap = {
    html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    express: 'https://img.icons8.com/color/48/000000/express-js.png',
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    tailwind: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg',
    postman: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    vscode: 'https://img.icons8.com/color/48/000000/visual-studio-code-2019.png',
    word: 'https://img.icons8.com/color/48/000000/microsoft-word-2019.png',
    excel: 'https://img.icons8.com/color/48/000000/microsoft-excel-2019.png',
    exel: 'https://img.icons8.com/color/48/000000/microsoft-excel-2019.png',
    powerpoint: 'https://img.icons8.com/color/48/000000/microsoft-powerpoint-2019.png',
    pont: 'https://img.icons8.com/color/48/000000/microsoft-powerpoint-2019.png',
    canva: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg',
    figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    sheets: 'https://img.icons8.com/color/48/000000/google-sheets.png',
    docs: 'https://img.icons8.com/color/48/000000/google-docs.png',
    windows: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg'
};

const getIcon = (name) => {
    const n = name.toLowerCase();
    for (const key in iconMap) {
        if (n.includes(key)) return iconMap[key];
    }
    return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'; // Fallback
};

const Skills = () => {
    const categories = [
        { id: 'frontend', title: 'Frontend Development' },
        { id: 'backend', title: 'Backend & Database' },
        { id: 'tools', title: 'Tools & DevOps' },
        { id: 'additional', title: 'Additional Skills' }
    ];

    return (
        <section id="skills" className="py-5 position-relative overflow-hidden">
            {/* Background Glows */}
            <div className="position-absolute top-0 end-0" style={{ 
                width: '400px', 
                height: '400px', 
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(3, 3, 3, 0) 70%)',
                zIndex: 0
            }}></div>
            <div className="position-absolute bottom-0 start-0" style={{ 
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
                    <h2 className="section-title text-gradient d-inline-block mb-3">Technical Expertise</h2>
                    <div className="mx-auto bg-primary rounded-pill mb-4" style={{ width: '60px', height: '4px', opacity: 0.5 }}></div>
                </motion.div>
                
                <div className="row g-5">
                    {categories.map((cat, catIndex) => (
                        <div className="col-12" key={cat.id}>
                            <motion.h3 
                                className="fs-4 fw-bold mb-4 d-flex align-items-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-primary">{catIndex + 1}.</span> {cat.title}
                            </motion.h3>
                            
                            <motion.div 
                                className="row g-3 g-md-4"
                            >
                                {skillsData[cat.id]?.map((skill, index) => {
                                    const isExpress = skill.name.toLowerCase().includes('express');
                                    const isAdditional = cat.id === 'additional';
                                    return (
                                        <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={skill.name}>
                                            <motion.div 
                                                className="glass-card p-3 p-md-4 h-100 d-flex flex-column"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                                viewport={{ once: true }}
                                                whileHover={{ 
                                                    y: -8, 
                                                    background: 'rgba(255, 255, 255, 0.05)',
                                                    borderColor: 'var(--primary)',
                                                    boxShadow: '0 15px 35px rgba(0,0,0,0.4), 0 0 15px var(--primary-glow)' 
                                                }}
                                            >
                                                <div className="d-flex align-items-center gap-2 gap-md-3 mb-3">
                                                    <div className="icon-wrapper p-2 rounded-3 d-flex align-items-center justify-content-center shadow-sm" 
                                                        style={{ 
                                                            width: '40px', 
                                                            height: '40px',
                                                            background: 'rgba(255, 255, 255, 0.03)',
                                                            border: '1px solid rgba(255, 255, 255, 0.08)'
                                                        }}>
                                                        <motion.img 
                                                            src={getIcon(skill.name)} 
                                                            alt={skill.name} 
                                                            width="24" 
                                                            height="24" 
                                                            animate={{ 
                                                                opacity: [0.8, 1, 0.8],
                                                                scale: [0.95, 1, 0.95]
                                                            }}
                                                            transition={{ 
                                                                duration: 2, 
                                                                repeat: Infinity, 
                                                                ease: "easeInOut",
                                                                delay: index * 0.1
                                                            }}
                                                            style={{ 
                                                                filter: isExpress ? 'brightness(0) invert(1)' : 'none',
                                                                objectFit: 'contain'
                                                            }} 
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="mb-0 fw-bold" style={{ fontSize: '0.85rem' }}>{skill.name}</h4>
                                                        {isAdditional && <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary p-0 border-0" style={{ fontSize: '0.6rem' }}>Basic</span>}
                                                    </div>
                                                </div>
                                                
                                                <div className="mt-auto pt-2">
                                                    <div className="d-flex justify-content-between mb-1">
                                                        <span className="text-muted fw-medium" style={{ fontSize: '0.6rem', textTransform: 'uppercase' }}>
                                                            {isAdditional ? 'Basic Knowledge' : 'Expertise Level'}
                                                        </span>
                                                        <span className="text-primary fw-bold" style={{ fontSize: '0.65rem' }}>{skill.level}%</span>
                                                    </div>
                                                    <div className="progress overflow-visible" style={{ height: '3px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                                                        <motion.div
                                                            className="progress-bar position-relative overflow-visible"
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${skill.level}%` }}
                                                            transition={{ duration: 1, ease: "easeOut" }}
                                                            viewport={{ once: true }}
                                                            style={{ 
                                                                background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                                                                borderRadius: '10px'
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
