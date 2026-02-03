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
        <nav className={`fixed top-0 left-0 right-0 z-50 h-[88px] transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-xl border-b border-white/5 saturate-150' : 'bg-transparent'}`}>
            <div className="container h-full flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="bg-gradient-to-tr from-accent to-secondary p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20">
                            <Sparkles className="text-white w-5 h-5" />
                        </div>
                    </div>
                    <div>
                        <span className="text-xl font-bold tracking-tight text-white block leading-none">Diamond<span className="text-accent">Clean</span></span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">Premium Services</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center bg-white/5 rounded-full p-1.5 border border-white/5 backdrop-blur-sm">
                    <Link href="/" className="px-5 py-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">Acasă</Link>
                    <Link href="/despre-noi" className="px-5 py-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">Despre Noi</Link>
                    <Link href="/servicii" className="px-5 py-2.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all text-sm font-medium">Servicii</Link>
                    <Link href="/contact" className="px-6 py-2.5 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-all shadow-lg shadow-accent/20 ml-2">
                        Cere Ofertă
                    </Link>
                </div>

                <a href="tel:0774494671" className="hidden lg:flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                        <Phone size={18} />
                    </div>
                    <div className="text-right">
                        <span className="block text-[10px] text-slate-400 uppercase tracking-widest">Sună Acum</span>
                        <span className="font-bold text-white group-hover:text-accent transition-colors">077.449.4671</span>
                    </div>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-3 rounded-full hover:bg-white/10 text-white transition-colors border border-white/10"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-[88px] bg-primary/95 backdrop-blur-3xl z-40 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col p-8 gap-6 h-full border-t border-white/10">
                            <div className="space-y-2">
                                <Link href="/" onClick={() => setIsOpen(false)} className="block text-3xl font-bold text-white hover:text-accent transition-colors">Acasă</Link>
                                <Link href="/despre-noi" onClick={() => setIsOpen(false)} className="block text-3xl font-bold text-slate-400 hover:text-white transition-colors">Despre Noi</Link>
                                <Link href="/servicii" onClick={() => setIsOpen(false)} className="block text-3xl font-bold text-slate-400 hover:text-white transition-colors">Servicii</Link>
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-3xl font-bold text-slate-400 hover:text-white transition-colors">Contact</Link>
                            </div>

                            <hr className="border-white/10 my-4" />

                            <div className="space-y-4">
                                <p className="text-slate-500 uppercase tracking-widest text-xs">Contact Rapid</p>
                                <a href="tel:0774494671" className="flex items-center gap-4 text-white text-xl font-medium">
                                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                        <Phone size={24} />
                                    </div>
                                    0774.494.671
                                </a>
                            </div>

                            <div className="mt-auto pb-24">
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary w-full justify-center py-5 text-lg">
                                    Solicită Ofertă Gratuită
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
