'use client';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section relative">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50 -z-10"></div>
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">Contact</span>
                    <h2>Intră în Legătură cu Noi</h2>
                    <p className="text-muted max-w-xl mx-auto">
                        Ești gata pentru o curățenie de diamant? Contactează-ne pentru o ofertă personalizată sau orice întrebare.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <div className="card flex items-start gap-4 p-6 hover:-translate-y-1 transition-transform">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Telefon</h4>
                                <p className="text-muted text-sm mb-2">Luni -Duminică, 08:00 - 20:00</p>
                                <a href="tel:0774494671" className="text-xl font-bold text-accent hover:text-primary transition-colors">0774.494.671</a>
                            </div>
                        </div>

                        <div className="card flex items-start gap-4 p-6 hover:-translate-y-1 transition-transform">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Email</h4>
                                <p className="text-muted text-sm mb-2">Răspundem în maxim 24h</p>
                                <a href="mailto:contact@diamondclean.ro" className="text-lg font-bold text-accent hover:text-primary transition-colors">contact@diamondclean.ro</a>
                            </div>
                        </div>

                        <div className="card flex items-start gap-4 p-6 hover:-translate-y-1 transition-transform">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-1">Acoperire</h4>
                                <p className="text-muted">Deservim tot Bucureștiul și Județul Ilfov.</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card p-8 lg:p-10 shadow-xl border-t-4 border-accent">
                        <h3 className="mb-6">Trimite un Mesaj</h3>
                        <form className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Nume</label>
                                    <input type="text" placeholder="Numele tău" className="w-full p-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-2">Telefon</label>
                                    <input type="tel" placeholder="07xx..." className="w-full p-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Serviciu Dorit</label>
                                <select className="w-full p-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white">
                                    <option>Selectează un serviciu...</option>
                                    <option>Curățare Canapele</option>
                                    <option>Curățenie Generală</option>
                                    <option>Curățenie Birou</option>
                                    <option>Curățenie După Constructor</option>
                                    <option>Altul</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Mesaj</label>
                                <textarea rows="4" placeholder="Detalii despre locație,mp, etc." className="w-full p-3 rounded-lg border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-y"></textarea>
                            </div>

                            <button type="button" className="btn btn-primary w-full mt-2 justify-center group">
                                Trimite Cererea <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

