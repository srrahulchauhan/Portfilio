import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Phone } from 'lucide-react';
import { socialData } from '../data';

const MotionLink = motion(Link);

const Navbar = ({ activeSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { name: 'Home', href: '/#hero', id: 'hero' },
        { name: 'Skills', href: '/#skills', id: 'skills' },
        { name: 'Projects', href: '/#projects', id: 'projects' },
        { name: 'Experience', href: '/#experience', id: 'experience' },
        { name: 'Education', href: '/#education', id: 'education' },
        { name: 'About', href: '/#about', id: 'about' },
        { name: 'Contact', href: '/#contact', id: 'contact' },
    ];

    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-glass ${scrolled ? 'py-2 shadow-lg' : 'py-3'}`}>
            <div className="container">
                <MotionLink 
                    className="navbar-brand fw-bold fs-3 text-white" 
                    to="/"
                    whileHover={{ scale: 1.05 }}
                >
                    Rahul<span className="text-primary">.</span>
                </MotionLink>
                
                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} text-white fs-2`}></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="mainNav">
                    <ul className="navbar-nav ms-auto gap-lg-2 align-items-center">
                        {links.map((l) => (
                            <li className="nav-item" key={l.name}>
                                <NavHashLink 
                                    smooth
                                    className={`nav-link px-3 ${activeSection === l.id ? 'active' : ''}`} 
                                    to={l.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {l.name}
                                </NavHashLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            {/* Scroll Progress Bar */}
            <motion.div
                className="position-absolute bottom-0 start-0 h-1 bg-primary"
                style={{ 
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                    boxShadow: '0 0 10px var(--primary-glow)'
                }}
                initial={{ width: 0 }}
                animate={{ 
                    width: `${((links.findIndex(l => l.id === activeSection) + 1) / links.length) * 100}%` 
                }}
                transition={{ type: 'spring', stiffness: 50 }}
            />
        </nav>
    );
};

export default Navbar;
