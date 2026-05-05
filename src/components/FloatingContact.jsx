import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { socialData } from '../data';
import { User, X } from 'lucide-react';

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const phoneNumber = socialData.phone;
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsVisible(false);
                setIsOpen(false); // Close menu if user scrolls away
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const contactLinks = [
        {
            icon: 'bi bi-telephone-fill',
            href: `tel:${phoneNumber}`,
            color: '#3b82f6',
            label: 'Call Me'
        },
        {
            icon: 'bi bi-whatsapp',
            href: `https://wa.me/91${phoneNumber}`,
            color: '#25d366',
            label: 'WhatsApp'
        },
        {
            icon: 'bi bi-linkedin',
            href: socialData.linkedin,
            color: '#0077b5',
            label: 'LinkedIn'
        }
    ];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    className="position-fixed end-0 p-4 d-flex flex-column align-items-center gap-3" 
                    style={{ zIndex: 1000, bottom: '20px' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
                >
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div 
                                className="d-flex flex-column gap-3 mb-2"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                {contactLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        target={link.label === 'Call Me' ? '_self' : '_blank'}
                                        rel="noopener noreferrer"
                                        className="d-flex align-items-center justify-content-center shadow-lg position-relative group"
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            backgroundColor: link.color,
                                            color: 'white',
                                            borderRadius: '50%',
                                            fontSize: '20px',
                                            textDecoration: 'none'
                                        }}
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.9 }}
                                        variants={{
                                            hidden: { opacity: 0, y: 20, scale: 0.5 },
                                            visible: { 
                                                opacity: 1, 
                                                y: 0, 
                                                scale: 1,
                                                transition: { delay: index * 0.05, type: 'spring', stiffness: 300, damping: 20 }
                                            }
                                        }}
                                    >
                                        <i className={link.icon}></i>
                                        
                                        {/* Tooltip */}
                                        <span className="position-absolute end-100 me-3 px-3 py-2 rounded-3 bg-dark text-white fs-6 fw-medium opacity-0 invisible group-hover-visible transition-all" style={{ whiteSpace: 'nowrap' }}>
                                            {link.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="d-flex flex-column align-items-center gap-2">
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-lg border-0 position-relative"
                            style={{ width: '64px', height: '64px' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Blink/Ping effect */}
                            {!isOpen && (
                                <span className="position-absolute top-0 start-0 w-100 h-100 rounded-circle border border-2 border-primary opacity-50" style={{ animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite', zIndex: -1 }}></span>
                            )}
                            
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isOpen ? <X size={28} /> : <User size={28} />}
                            </motion.div>
                        </motion.button>
                        
                        {!isOpen && (
                            <motion.span
                                className="text-white text-center"
                                style={{ fontSize: '13px', fontWeight: '500', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
                                animate={{ opacity: [0.4, 1, 0.4], y: [0, -3, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                Get in Touch
                            </motion.span>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingContact;
