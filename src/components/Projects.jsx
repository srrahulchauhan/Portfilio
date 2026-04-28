import React from 'react';
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
        <section id="projects" className="py-5">
            <div className="container py-4">
                <h2 className="text-center fw-bold mb-5 section-title">Featured Projects</h2>
                <div className="row g-4">
                    {projectsData.map((project) => (
                        <div className="col-lg-6" key={project.id}>
                            <div className="card border-0 shadow-sm h-100 overflow-hidden project-card">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="card-img-top"
                                        style={{ height: '220px', objectFit: 'cover' }}
                                    />
                                )}
                                <div className="card-body d-flex flex-column p-4">
                                    <h5 className="card-title fw-bold">{project.title}</h5>
                                    <p className="card-text text-muted flex-grow-1">{project.description}</p>
                                    <div className="d-flex flex-wrap gap-2 mb-3">
                                        {project.tech.map((t) => (
                                            <span key={t} className="badge rounded-pill tech-badge d-flex align-items-center gap-1">
                                                {getTechIcon(t) && <img src={getTechIcon(t)} alt={t} width="14" height="14" />}
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="d-flex gap-3">
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary rounded-pill px-3">
                                            Live Demo ↗
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark rounded-pill px-3">
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
