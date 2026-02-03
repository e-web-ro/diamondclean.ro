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
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary/5 p-2 rounded-xl group-hover:bg-primary/10 transition-colors">
                        <Sparkles className="text-accent w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-primary">Diamond<span className="text-accent">Clean</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links">
                    <Link href="/" className="nav-link">Acasă</Link>
                    <Link href="/despre-noi" className="nav-link">Despre Noi</Link>
                    <Link href="/servicii" className="nav-link">Servicii</Link>
                    <div className="h-6 w-px bg-slate-200 mx-2"></div>
                    <a href="tel:0774494671" className="flex items-center gap-2 font-semibold text-primary hover:text-accent transition-colors px-2">
                        <div className="bg-accent/10 p-1.5 rounded-full">
                            <Phone size={16} className="text-accent" />
                        </div>
                        0774.494.671
                    </a>
                    <Link href="/contact" className="btn btn-primary ml-4 !py-2.5 !px-6 text-sm">
                        Cere Ofertă
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
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
                        className="absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xl overflow-hidden md:hidden z-40"
                    >
                        <div className="flex flex-col p-6 gap-2">
                            <Link href="/" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-lg hover:bg-slate-50 font-medium text-slate-700">Acasă</Link>
                            <Link href="/despre-noi" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-lg hover:bg-slate-50 font-medium text-slate-700">Despre Noi</Link>
                            <Link href="/servicii" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-lg hover:bg-slate-50 font-medium text-slate-700">Servicii</Link>

                            <div className="my-2 border-t border-slate-100"></div>

                            <a href="tel:0774494671" className="flex items-center gap-3 px-4 py-3 text-primary font-semibold">
                                <Phone size={18} className="text-accent" />
                                0774.494.671
                            </a>

                            <Link href="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary w-full justify-center mt-2">
                                Cere Ofertă Gratuită
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

