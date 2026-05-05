import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollButtons = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.button
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="scroll-top-btn d-flex align-items-center justify-content-center"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}
                    title="Back to top"
                >
                    <i className="bi bi-arrow-up fs-4"></i>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollButtons;
