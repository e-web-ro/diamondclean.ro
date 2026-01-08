'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
    return (
        <section id="acasa" className="section relative overflow-hidden bg-slate-50 pt-32 pb-20">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-2/3 bg-cyan-50/50 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm mb-6 text-sm font-semibold text-primary">
                            <Star className="w-4 h-4 text-accent" fill="currentColor" />
                            <span>Servicii de Curățenie Premium #1</span>
                        </div>

                        <h1 className="mb-6 leading-tight">
                            Curățenie de <span className="text-gradient">Diamant</span> pentru <br />
                            Liniștea Ta
                        </h1>

                        <p className="mb-8 text-lg text-muted max-w-lg">
                            Transformăm orice spațiu într-un sanctuar de curățenie și prospețime.
                            Echipă verificată, soluții eco-friendly și garanția satisfacției 100%.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <a href="#contact" className="btn btn-primary btn-lg group">
                                Solicita Ofertă <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#servicii" className="btn btn-outline">
                                Vezi Serviciile Noastre
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                                <div className="text-sm text-muted">Clienți Mulțumiți</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                                <div className="text-sm text-muted">Garanție</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                                <div className="text-sm text-muted">Suport</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1581578731117-104f2a41272c?q=80&w=1000&auto=format&fit=crop"
                                alt="Living room curat și luminos"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />

                            {/* Floating Badge 1 */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 max-w-xs"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-primary">Personal Verificat</p>
                                        <p className="text-xs text-muted">Echipă de încredere și asigurată</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Badge 2 */}
                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                                className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50"
                            >
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-accent" />
                                    <span className="font-bold text-sm text-primary">Rapid & Eficient</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative background blob behind image */}
                        <div className="absolute -top-10 -right-10 w-full h-full bg-accent/10 rounded-3xl -z-10 rotate-3"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

