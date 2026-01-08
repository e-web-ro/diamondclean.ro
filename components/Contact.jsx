'use client';
import { Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section section-bg">
            <div className="container">
                <div className="grid grid-cols-1 grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>

                    <div>
                        <h2 className="mb-2">Contactează-ne</h2>
                        <p className="mb-4" style={{ color: 'var(--text-light)' }}>
                            Suntem aici să te ajutăm! Cere o ofertă gratuită sau programează o curățenie.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="card flex items-center gap-4" style={{ padding: '1.5rem', flexDirection: 'row', alignItems: 'center' }}>
                                <div className="text-accent"><Phone size={24} /></div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: 0 }}>Telefon</h4>
                                    <a href="tel:0700000000" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>07xx.xxx.xxx</a>
                                </div>
                            </div>

                            <div className="card flex items-center gap-4" style={{ padding: '1.5rem', flexDirection: 'row', alignItems: 'center' }}>
                                <div className="text-accent"><Mail size={24} /></div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: 0 }}>Email</h4>
                                    <a href="mailto:contact@diamondclean.ro" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>contact@diamondclean.ro</a>
                                </div>
                            </div>

                            <div className="card flex items-center gap-4" style={{ padding: '1.5rem', flexDirection: 'row', alignItems: 'center' }}>
                                <div className="text-accent"><Clock size={24} /></div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: 0 }}>Program</h4>
                                    <p style={{ fontWeight: 'bold' }}>Luni - Sâmbătă: 08:00 - 20:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="mb-4">Trimite un mesaj</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Nume</label>
                                <input type="text" placeholder="Numele tău" style={{
                                    width: '100%', padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid #e2e8f0', fontFamily: 'inherit'
                                }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Telefon</label>
                                <input type="tel" placeholder="Număr de telefon" style={{
                                    width: '100%', padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid #e2e8f0', fontFamily: 'inherit'
                                }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Serviciu Dorit</label>
                                <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid #e2e8f0', fontFamily: 'inherit' }}>
                                    <option>Curățare Canapea</option>
                                    <option>Curățenie Generală</option>
                                    <option>Curățenie Birou</option>
                                    <option>Altul</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600 }}>Mesaj</label>
                                <textarea rows="4" placeholder="Detalii despre suprafață, locație, etc." style={{
                                    width: '100%', padding: '0.75rem', borderRadius: 'var(--radius)', border: '1px solid #e2e8f0', fontFamily: 'inherit', resize: 'vertical'
                                }}></textarea>
                            </div>
                            <button type="button" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Trimite Cererea</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
