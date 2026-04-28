import React from 'react';
import { heroData } from '../data';

const Hero = () => {
    return (
        <section id="hero" className="min-vh-100 d-flex align-items-center hero-bg">
            <div className="container">
                <div className="row align-items-center gy-5">
                    <div className="col-lg-7 order-2 order-lg-1">
                        <p className="text-uppercase ls-wide text-muted mb-2" style={{ letterSpacing: '3px', fontSize: '0.85rem' }}>Hello, I'm</p>
                        <h1 className="display-2 fw-800 hero-name mb-2">{heroData.name}</h1>
                        <h2 className="fs-4 fw-normal text-secondary mb-3">{heroData.role}</h2>
                        <p className="lead text-muted mb-4" style={{ maxWidth: '520px' }}>{heroData.intro}</p>
                        <div className="d-flex gap-3 flex-wrap">
                            <a href={heroData.resumeLink} className="btn btn-primary btn-lg px-4 rounded-pill" download>
                                <i className="bi bi-download me-2"></i>Download Resume
                            </a>
                            <a href="#contact" className="btn btn-outline-secondary btn-lg px-4 rounded-pill">
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 order-1 order-lg-2 text-center">
                        <div className="profile-wrapper mx-auto">
                            <img
                                src="/logo.jpeg"
                                alt={heroData.name}
                                className="profile-img rounded-circle"
                                onError={(e) => {
                                    e.target.src = `https://ui-avatars.com/api/?name=${heroData.name}&background=6c5ce7&color=fff&size=256`;
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
