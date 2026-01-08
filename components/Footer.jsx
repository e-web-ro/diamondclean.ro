'use client';
import { Sparkles, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ background: 'var(--primary)', color: 'var(--white)', padding: '4rem 0 2rem 0' }}>
            <div className="container">
                <div className="grid grid-cols-1 grid-cols-2" style={{ marginBottom: '3rem', gap: '2rem' }}>
                    <div>
                        <div className="logo mb-4" style={{ color: 'var(--white)' }}>
                            <Sparkles className="text-accent" />
                            DiamondClean
                        </div>
                        <p style={{ maxWidth: '300px', opacity: 0.8 }}>
                            Servicii profesionale de curățenie în București și Ilfov. Calitate garantată și prețuri corecte.
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                        {/* Adjusted alignment for better mobile/desktop compatibility */}
                        <h4 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Urmărește-ne</h4>
                        <div className="flex gap-4">
                            <a href="#" style={{ color: 'white', opacity: 0.8 }}><Facebook /></a>
                            <a href="#" style={{ color: 'white', opacity: 0.8 }}><Instagram /></a>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.6, fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} DiamondClean. Toate drepturile rezervate.
                </div>
            </div>
        </footer>
    );
}
