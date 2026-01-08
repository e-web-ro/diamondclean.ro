'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link href="/" className="logo">
                    <div className="bg-primary/10 p-2 rounded-lg">
                        <Sparkles className="text-accent w-6 h-6" />
                    </div>
                    <span className="text-xl tracking-tight">Diamond<span className="text-accent">Clean</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links items-center">
                    <Link href="/" className="nav-link">Acasă</Link>
                    <Link href="/despre-noi" className="nav-link">Despre Noi</Link>
                    <Link href="/servicii" className="nav-link">Servicii</Link>
                    <div className="h-6 w-px bg-slate-200 mx-2"></div>
                    <a href="tel:0774494671" className="flex items-center gap-2 font-semibold text-primary hover:text-accent transition-colors">
                        <Phone size={18} />
                        0774.494.671
                    </a>
                    <Link href="#contact" className="btn btn-primary ml-4 !py-2 !px-6">
                        Cere Ofertă
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn p-2 hover:bg-slate-100 rounded-lg transition-colors" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            <Link href="/" onClick={() => setIsOpen(false)} className="nav-link text-lg py-2 border-b border-slate-50">Acasă</Link>
                            <Link href="/despre-noi" onClick={() => setIsOpen(false)} className="nav-link text-lg py-2 border-b border-slate-50">Despre Noi</Link>
                            <Link href="/servicii" onClick={() => setIsOpen(false)} className="nav-link text-lg py-2 border-b border-slate-50">Servicii</Link>
                            <Link href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary w-full justify-center mt-2">
                                Cere Ofertă Gratuită
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

