'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link href="/" className="logo">
                    <Sparkles className="text-accent" />
                    DiamondClean
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links">
                    <Link href="#acasa" className="nav-link">Acasă</Link>
                    <Link href="#servicii" className="nav-link">Servicii</Link>
                    <Link href="#despre" className="nav-link">Despre Noi</Link>
                    <Link href="#contact" className="btn btn-primary">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'white',
                    padding: '2rem',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    alignItems: 'center',
                    borderBottom: '1px solid #eee'
                }}>
                    <Link href="#acasa" onClick={() => setIsOpen(false)} className="nav-link">Acasă</Link>
                    <Link href="#servicii" onClick={() => setIsOpen(false)} className="nav-link">Servicii</Link>
                    <Link href="#despre" onClick={() => setIsOpen(false)} className="nav-link">Despre Noi</Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary">Contact</Link>
                </div>
            )}
        </nav>
    );
}
