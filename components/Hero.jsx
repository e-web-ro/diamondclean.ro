'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="acasa" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary">
            {/* Animated Glow Background */}
            <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-40 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] opacity-30 animate-pulse-slow"></div>

            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8">
                                <Sparkles className="w-4 h-4 text-accent animate-spin-slow" />
                                <span className="text-sm font-semibold tracking-wide text-cyan-100">Premium Cleaning Services</span>
                            </div>

                            <h1 className="mb-6 leading-tight">
                                Curățenie la Standarde <br />
                                <span className="text-gradient">De Diamant</span>
                            </h1>

                            <p className="mb-10 text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Experimentează perfecțiunea în curățenie. Soluții eco-friendly, echipamente de ultimă generație și o echipă dedicată confortului tău.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
                                <a href="#contact" className="btn btn-primary group">
                                    Solicită Ofertă
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <Link href="/servicii" className="btn btn-outline group">
                                    Descoperă Serviciile
                                </Link>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-white/10">
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">500+</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest">Clienți</div>
                                </div>
                                <div className="w-px h-10 bg-white/10"></div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest">Garanție</div>
                                </div>
                                <div className="w-px h-10 bg-white/10"></div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest">Suport</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Image / Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                            <Image
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
                                alt="Luxury Clean Interior"
                                width={1000}
                                height={800}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                priority
                            />

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 left-10 z-20 glass p-4 rounded-xl border border-white/20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">100% Asigurat</p>
                                        <p className="text-xs text-slate-400">Personal Verificat</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-10 right-10 z-20 glass p-3 rounded-lg border border-white/20"
                            >
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                    <span className="font-bold text-white">5.0 Rating</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decor */}
                        <div className="absolute -top-10 -right-10 w-full h-full border-2 border-accent/20 rounded-3xl -z-10 translate-x-6 translate-y-6"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
