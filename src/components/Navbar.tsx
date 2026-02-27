'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-inner">
                <a href="#hero" className="navbar-brand" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '3px', color: 'white' }}>
                    PANDUDUNIA
                </a>
                <ul className={`navbar-links ${menuOpen ? 'open' : ''}`} style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                    <li><a href="#tentang" onClick={handleLinkClick}>Tentang</a></li>
                    <li><a href="#peraturan" onClick={handleLinkClick}>Peraturan</a></li>
                    <li><a href="#kota" onClick={handleLinkClick}>Beli Tiket</a></li>
                    <li><a href="#faq" onClick={handleLinkClick}>FAQ</a></li>
                </ul>

                <div className="navbar-right">
                    <a href="#kota" className="navbar-cta-btn" onClick={handleLinkClick}>
                        Beli Tiket
                    </a>
                    <button
                        className="mobile-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
