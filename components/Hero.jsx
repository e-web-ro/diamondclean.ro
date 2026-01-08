'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section id="acasa" style={{
            paddingTop: '120px',
            paddingBottom: '80px',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="grid grid-cols-1" style={{ alignItems: 'center', gap: '4rem' }}>
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="mb-4">
                            Curățenie de <span className="text-accent">Diamant</span> pentru Casa Ta
                        </h1>
                        <p className="mb-4" style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '500px' }}>
                            Transformăm orice spațiu într-un loc impecabil. Servicii profesionale de curățenie în București și Ilfov, pentru locuințe și birouri.
                        </p>
                        <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn btn-primary">
                                Cere Ofertă <ArrowRight size={20} />
                            </a>
                            <a href="#servicii" className="btn btn-outline" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>
                                Vezi Servicii
                            </a>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <div style={{
                            width: '100%',
                            maxWidth: '600px',
                            height: '400px',
                            background: '#fff',
                            borderRadius: '20px',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundImage: 'url("https://images.unsplash.com/photo-1584622050111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")', // Cleaning / bright living room
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                background: 'rgba(255,255,255,0.95)',
                                padding: '1rem',
                                borderRadius: '10px',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                                    <Sparkles size={20} className="text-accent" />
                                    100% Satisfacție
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
