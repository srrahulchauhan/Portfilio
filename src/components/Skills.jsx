import React from 'react';
import { skillsData } from '../data';

const iconMap = {
    html: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
};

const getIcon = (name) => {
    const n = name.toLowerCase();
    for (const key in iconMap) {
        if (n.includes(key)) return iconMap[key];
    }
    return '';
};

const Skills = () => {
    return (
        <section id="skills" className="py-5 section-alt">
            <div className="container py-4">
                <h2 className="text-center fw-bold mb-5 section-title">Technical Skills</h2>
                <div className="row g-4">
                    {skillsData.map((skill) => (
                        <div className="col-md-6" key={skill.name}>
                            <div className="card border-0 shadow-sm p-3 h-100 skill-card">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span className="d-flex align-items-center gap-2 fw-medium">
                                        {getIcon(skill.name) && (
                                            <img src={getIcon(skill.name)} alt={skill.name} width="24" height="24" />
                                        )}
                                        {skill.name}
                                    </span>
                                    <span className="badge bg-primary rounded-pill">{skill.level}%</span>
                                </div>
                                <div className="progress" style={{ height: '8px' }}>
                                    <div
                                        className="progress-bar progress-bar-animated"
                                        role="progressbar"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
