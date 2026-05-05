import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sectionStyles = {
    hero: {
        primary: 'rgba(124, 58, 237, 0.15)', // Purple
        secondary: 'rgba(79, 70, 229, 0.15)', // Indigo
        accent: 'rgba(236, 72, 153, 0.1)', // Pink
    },
    skills: {
        primary: 'rgba(59, 130, 246, 0.15)', // Blue
        secondary: 'rgba(16, 185, 129, 0.15)', // Emerald
        accent: 'rgba(6, 182, 212, 0.1)', // Cyan
    },
    projects: {
        primary: 'rgba(249, 115, 22, 0.15)', // Orange
        secondary: 'rgba(236, 72, 153, 0.15)', // Pink
        accent: 'rgba(234, 179, 8, 0.1)', // Yellow
    },
    experience: {
        primary: 'rgba(139, 92, 246, 0.15)', // Violet
        secondary: 'rgba(99, 102, 241, 0.15)', // Indigo
        accent: 'rgba(217, 70, 239, 0.1)', // Fuchsia
    },
    education: {
        primary: 'rgba(20, 184, 166, 0.15)', // Teal
        secondary: 'rgba(59, 130, 246, 0.15)', // Blue
        accent: 'rgba(16, 185, 129, 0.1)', // Emerald
    },
    about: {
        primary: 'rgba(239, 68, 68, 0.15)', // Red
        secondary: 'rgba(249, 115, 22, 0.15)', // Orange
        accent: 'rgba(234, 179, 8, 0.1)', // Yellow
    },
    contact: {
        primary: 'rgba(139, 92, 246, 0.15)', // Violet
        secondary: 'rgba(59, 130, 246, 0.15)', // Blue
        accent: 'rgba(99, 102, 241, 0.1)', // Indigo
    }
};

const AnimatedBackground = ({ activeSection }) => {
    const colors = useMemo(() => sectionStyles[activeSection] || sectionStyles.hero, [activeSection]);

    return (
        <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: -3, overflow: 'hidden', pointerEvents: 'none', backgroundColor: '#030303' }}>
            {/* Dynamic Mesh Gradients */}
            <motion.div
                className="position-absolute"
                style={{
                    width: '100vw',
                    height: '100vh',
                    background: `radial-gradient(at 0% 0%, ${colors.primary} 0px, transparent 50%)`,
                }}
                animate={{
                    background: `radial-gradient(at 0% 0%, ${colors.primary} 0px, transparent 50%)`,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
                className="position-absolute"
                style={{
                    width: '100vw',
                    height: '100vh',
                    background: `radial-gradient(at 100% 0%, ${colors.secondary} 0px, transparent 50%)`,
                }}
                animate={{
                    background: `radial-gradient(at 100% 0%, ${colors.secondary} 0px, transparent 50%)`,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div
                className="position-absolute"
                style={{
                    width: '100vw',
                    height: '100vh',
                    background: `radial-gradient(at 50% 100%, ${colors.accent} 0px, transparent 50%)`,
                }}
                animate={{
                    background: `radial-gradient(at 50% 100%, ${colors.accent} 0px, transparent 50%)`,
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            {/* Subtle Grid Overlay */}
            <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                    opacity: 0.1
                }}
            />

            {/* Grain Texture */}
            <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                    opacity: 0.02,
                    pointerEvents: 'none'
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
