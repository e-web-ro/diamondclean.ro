'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, ShieldCheck, Clock, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="acasa" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            {/* Modern Gradient Background */}
            <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 text-sm font-semibold text-primary mx-auto lg:mx-0"
                        >
                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                            <span className="tracking-wide">Premium Cleaning Services</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-[1.15] tracking-tight">
                            Curățenie de <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Diamant</span> <br className="hidden lg:block" />
                            pentru Liniștea Ta
                        </h1>

                        <p className="mb-8 text-lg md:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Transformăm orice spațiu într-un sanctuar de prospețime.
                            Echipă verificată, soluții eco-friendly și garanția satisfacției 100%.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <a href="#contact" className="btn btn-primary btn-lg group shadow-accent/25">
                                Solicită Ofertă
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link href="/servicii" className="btn btn-outline btn-lg group">
                                Serviciile Noastre
                            </Link>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-8 py-8 border-t border-slate-200">
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                                <div className="text-sm text-slate-500 font-medium">Clienți Mulțumiți</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                                <div className="text-sm text-slate-500 font-medium">Garanție</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                                <div className="text-sm text-slate-500 font-medium">Suport Rapid</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=1000&auto=format&fit=crop"
                                alt="Living room modern"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
                            />

                            {/* Floating Badge 1 - Verified */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 max-w-xs"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-2.5 rounded-xl text-green-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-primary">Personal Verificat</p>
                                        <p className="text-xs text-slate-500 mt-0.5">Echipă de încredere și asigurată</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2 - Support */}
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute top-8 right-8 bg-white/95 backdrop-blur-md p-3 pr-5 rounded-full shadow-lg border border-white/50"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="bg-accent/10 p-1.5 rounded-full text-accent">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-sm text-primary">Rapid & Eficient</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative blobs */}
                        <div className="absolute -top-12 -right-12 w-full h-full border-2 border-accent/20 rounded-3xl -z-10 translate-x-4 translate-y-4"></div>
                        <div className="absolute -bottom-12 -left-12 w-full h-full bg-primary/5 rounded-3xl -z-20 -rotate-3"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

