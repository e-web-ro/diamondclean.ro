import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    return (
        <main>
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4"></div>
                <div className="container text-center">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Contact</span>
                    <h1 className="mb-6">Suntem Aici Pentru Tine</h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Ai o întrebare sau vrei o ofertă personalizată? Echipa noastră îți stă la dispoziție.
                    </p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Info Text */}
                        <div>
                            <h2 className="mb-6">Hai să discutăm despre curățenia ta</h2>
                            <p className="text-muted mb-8 text-lg">
                                Indiferent dacă este vorba despre o garsonieră, o vilă sau un spațiu de birouri,
                                tratam fiecare proiect cu aceeași seriozitate.
                            </p>

                            <div className="flex flex-col gap-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Telefon</h4>
                                        <a href="tel:0774494671" className="text-xl font-bold text-accent hover:text-primary transition-colors block mb-1">
                                            0774.494.671
                                        </a>
                                        <p className="text-sm text-muted">Luni - Duminică: 08:00 - 20:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Email</h4>
                                        <a href="mailto:contact@diamondclean.ro" className="text-lg font-bold text-primary hover:text-accent transition-colors block mb-1">
                                            contact@diamondclean.ro
                                        </a>
                                        <p className="text-sm text-muted">Răspundem rapid la orice solicitare.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Zonă Acoperire</h4>
                                        <p className="text-lg font-semibold text-primary mb-1">București & Ilfov</p>
                                        <p className="text-sm text-muted">Deplasare gratuită în oraș.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    De ce să ne alegi?
                                </h4>
                                <ul className="grid grid-cols-1 gap-2 text-sm text-muted">
                                    <li>• Ofertă transparentă, fără costuri ascunse</li>
                                    <li>• Echipă asigurată și verificată</li>
                                    <li>• Garanția satisfacției 100%</li>
                                </ul>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 lg:p-10 relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10"></div>
                            <h3 className="mb-6">Trimite un Mesaj</h3>
                            <form className="flex flex-col gap-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Nume</label>
                                        <input type="text" placeholder="Numele tău" className="w-full" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">Telefon</label>
                                        <input type="tel" placeholder="07xx..." className="w-full" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Serviciu Dorit</label>
                                    <select className="w-full bg-white">
                                        <option>Selectează un serviciu...</option>
                                        <option>Curățare Canapele</option>
                                        <option>Curățenie Generală</option>
                                        <option>Curățenie Birou</option>
                                        <option>După Constructor</option>
                                        <option>Altul</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2">Detalii (mp, locație, etc.)</label>
                                    <textarea rows="4" placeholder="Spune-ne mai multe despre ce ai nevoie..." className="w-full resize-none"></textarea>
                                </div>

                                <button type="button" className="btn btn-primary w-full mt-2 justify-center group text-lg">
                                    Trimite Cererea <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-xs text-center text-muted mt-2">
                                    Prin trimiterea acestui formular ești de acord cu prelucrarea datelor personale.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
