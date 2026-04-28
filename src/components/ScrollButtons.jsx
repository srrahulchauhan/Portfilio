import React, { useState, useEffect } from 'react';

const ScrollButtons = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!show) return null;

    return (
        <button
            className="scroll-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Back to top"
        >
            ↑
        </button>
    );
};

export default ScrollButtons;
