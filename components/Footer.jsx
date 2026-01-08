'use client';
import { Sparkles, Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary pt-20 pb-10 text-slate-300">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-white mb-6">
                            <Sparkles className="text-accent w-6 h-6" />
                            DiamondClean
                        </Link>
                        <p className="mb-6 leading-relaxed">
                            Standardul ridicat în servicii de curățenie profesionale. Dedicați excelenței pentru locuința și afacerea ta.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61576888903458" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.tiktok.com/@diamondclean.ro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                                {/* Custom TikTok Icon SVG since it's not always available in lucide */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6">Link-uri Rapide</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#acasa" className="hover:text-accent transition-colors">Acasă</a></li>
                            <li><a href="#despre" className="hover:text-accent transition-colors">Despre Noi</a></li>
                            <li><a href="#servicii" className="hover:text-accent transition-colors">Servicii</a></li>
                            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6">Servicii Populare</h4>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#servicii" className="hover:text-accent transition-colors">Curățare Canapele</a></li>
                            <li><a href="#servicii" className="hover:text-accent transition-colors">Curățenie Generală</a></li>
                            <li><a href="#servicii" className="hover:text-accent transition-colors">Curățenie Birouri</a></li>
                            <li><a href="#servicii" className="hover:text-accent transition-colors">După Constructor</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6">Informații Contact</h4>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-accent mt-1" />
                                <div>
                                    <span className="block text-xs uppercase tracking-wider opacity-60">Telefon</span>
                                    <a href="tel:0774494671" className="text-white hover:text-accent font-semibold">0774.494.671</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-accent mt-1" />
                                <div>
                                    <span className="block text-xs uppercase tracking-wider opacity-60">Email</span>
                                    <a href="mailto:contact@diamondclean.ro" className="text-white hover:text-accent">contact@diamondclean.ro</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent mt-1" />
                                <div>
                                    <span className="block text-xs uppercase tracking-wider opacity-60">Locație</span>
                                    <span className="text-white">București & Ilfov</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-sm opacity-60">
                    <p>&copy; {new Date().getFullYear()} DiamondClean. Toate drepturile rezervate.</p>
                </div>
            </div>
        </footer>
    );
}

