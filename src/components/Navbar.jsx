import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { name: 'Home', href: '#hero' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'nav-scrolled' : ''}`} id="site-nav">
            <div className="container">
                <a className="navbar-brand fw-bold fs-4" href="#">
                    Rahul<span style={{ color: '#6c5ce7' }}>.</span>
                </a>
                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainNav">
                    <ul className="navbar-nav ms-auto gap-lg-1">
                        {links.map((l) => (
                            <li className="nav-item" key={l.name}>
                                <a className="nav-link px-3" href={l.href}>{l.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
