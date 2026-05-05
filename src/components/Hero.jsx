import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Send, MousePointer2, Mail, MessageCircle, Phone } from 'lucide-react';
import { heroData, socialData } from '../data';

const Hero = () => {
    const roles = ["Frontend Developer", "MERN Full Stack Developer", "UI/UX Enthusiast"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isContactHovered, setIsContactHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const handleType = () => {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                setTypingSpeed(50);
            } else {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setRoleIndex((roleIndex + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex, typingSpeed]);

    return (
        <section id="hero" className="hero-section">
            <div 
                className="position-absolute d-none d-lg-block"
                style={{
                    inset: 0,
                    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.08), transparent 80%)`,
                    zIndex: -1,
                    pointerEvents: 'none'
                }}
            />
            
            <div className="hero-blob" style={{ top: '-10%', left: '-10%' }}></div>
            <div className="hero-blob" style={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)' }}></div>
            
            <div className="container">
                <div className="row align-items-center gy-5">
                    <motion.div 
                        className="col-lg-7 order-2 order-lg-1"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 }
                            }
                        }}
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4 shadow-sm"
                            style={{ 
                                background: 'rgba(168, 85, 247, 0.1)', 
                                border: '1px solid rgba(168, 85, 247, 0.2)',
                                color: 'var(--primary)'
                            }}
                        >
                            <MousePointer2 size={16} />
                            <span className="fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '1.5px' }}>AVAILABLE FOR WORK</span>
                        </motion.div>

                        <motion.h1 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="display-1 fw-bold mb-3"
                            style={{ letterSpacing: '-0.04em', lineHeight: '1.1' }}
                        >
                            {heroData.name} <span className="text-primary">Dev</span>
                        </motion.h1>
                        <motion.h2 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="display-6 mb-4" style={{ minHeight: '1.2em', fontWeight: '600' }}
                        >
                            <span className="text-gradient fw-bold">{displayText}</span>
                            <span className="typewriter-cursor"></span>
                        </motion.h2>
                        <motion.p 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="lead mb-5 fs-5" style={{ maxWidth: '600px', color: 'rgba(255, 255, 255, 0.7)', fontWeight: '400', lineHeight: '1.8' }}
                        >
                            {heroData.intro}
                        </motion.p>
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="d-flex gap-2 gap-sm-4 flex-nowrap"
                        >
                            <motion.a 
                                href={heroData.resumeLink} 
                                className="btn btn-primary btn-lg px-3 px-sm-5 rounded-pill shadow-lg d-flex align-items-center justify-content-center gap-2 fw-bold"
                                style={{ 
                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                    border: 'none'
                                }}
                                whileHover={{ scale: 1.05, boxShadow: '0 0 25px var(--primary-glow)' }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={20} /> Resume
                            </motion.a>
                            <div className="position-relative d-inline-block">
                                <motion.div 
                                    className="d-flex align-items-center gap-2"
                                    initial={false}
                                    animate={isContactHovered ? "open" : "closed"}
                                >
                                    <motion.button 
                                        className="btn btn-lg px-3 px-sm-5 rounded-pill d-flex align-items-center justify-content-center gap-2 shadow-lg fw-bold"
                                        style={{ 
                                            minHeight: '58px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            color: 'white'
                                        }}
                                        onClick={() => setIsContactHovered(!isContactHovered)}
                                        whileHover={{ scale: 1.02, background: 'rgba(255, 255, 255, 0.1)' }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            animate={{ rotate: isContactHovered ? 180 : 0 }}
                                        >
                                            {isContactHovered ? <i className="bi bi-x-lg"></i> : <Send size={20} />}
                                        </motion.div>
                                        <span>{isContactHovered ? 'Close' : 'Contact Me'}</span>
                                    </motion.button>

                                    <div className="d-flex gap-2">
                                        {[
                                            { 
                                                id: 'gmail', 
                                                icon: <Mail size={22} />, 
                                                href: `https://mail.google.com/mail/?view=cm&fs=1&to=${socialData.email}`, 
                                                color: '#ea4335', 
                                                label: 'Gmail',
                                                bg: 'rgba(234, 67, 53, 0.1)'
                                            },
                                            { 
                                                id: 'whatsapp', 
                                                icon: <MessageCircle size={22} />, 
                                                href: `https://wa.me/91${socialData.phone}`, 
                                                color: '#25d366', 
                                                label: 'WhatsApp',
                                                bg: 'rgba(37, 211, 102, 0.1)'
                                            },
                                            { 
                                                id: 'call', 
                                                icon: <Phone size={22} />, 
                                                href: `tel:${socialData.phone}`, 
                                                color: '#3b82f6', 
                                                label: 'Call',
                                                bg: 'rgba(59, 130, 246, 0.1)'
                                            }
                                        ].map((item, index) => (
                                            <motion.a
                                                key={item.id}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="d-flex align-items-center justify-content-center rounded-circle shadow-lg"
                                                style={{ 
                                                    width: '54px', 
                                                    height: '54px', 
                                                    backgroundColor: item.bg,
                                                    border: `1px solid rgba(255, 255, 255, 0.1)`,
                                                    color: item.color,
                                                    textDecoration: 'none'
                                                }}
                                                variants={{
                                                    closed: { scale: 0, x: -20, opacity: 0 },
                                                    open: { 
                                                        scale: 1, 
                                                        x: 0, 
                                                        opacity: 1,
                                                        transition: { delay: index * 0.1, type: 'spring', stiffness: 260, damping: 20 }
                                                    }
                                                }}
                                                whileHover={{ scale: 1.15, backgroundColor: item.color, color: 'white', borderColor: item.color }}
                                                whileTap={{ scale: 0.9 }}
                                                title={item.label}
                                            >
                                                {item.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="col-lg-5 order-1 order-lg-2 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="profile-img-container">
                            <img
                                src="/logo.jpeg"
                                alt={heroData.name}
                                className="profile-img"
                                onError={(e) => {
                                    e.target.src = `https://ui-avatars.com/api/?name=${heroData.name}&background=7c3aed&color=fff&size=512`;
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
