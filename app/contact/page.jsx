import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="bg-primary min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/4"></div>

                <div className="container text-center relative z-10">
                    <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Contact</span>
                    <h1 className="mb-6">Suntem Aici Pentru Tine</h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Ai o întrebare sau vrei o ofertă personalizată? Echipa noastră îți stă la dispoziție cu răspunsuri rapide și soluții eficiente.
                    </p>
                </div>
            </section>

            <section className="section py-0 pb-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Info Text */}
                        <div>
                            <h2 className="mb-6 text-3xl">Hai să discutăm despre <span className="text-gradient">curățenia ta</span></h2>
                            <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                                Indiferent dacă este vorba despre o garsonieră, o vilă sau un spațiu de birouri,
                                tratăm fiecare proiect cu aceeași seriozitate și dedicare.
                            </p>

                            <div className="flex flex-col gap-8 mb-10">
                                <div className="flex items-start gap-5 group">
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1 text-white">Telefon</h4>
                                        <a href="tel:0774494671" className="text-xl font-bold text-white hover:text-accent transition-colors block mb-1">
                                            0774.494.671
                                        </a>
                                        <p className="text-sm text-slate-500">Luni - Duminică: 08:00 - 20:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1 text-white">Email</h4>
                                        <a href="mailto:contact@diamondclean.ro" className="text-lg font-bold text-white hover:text-accent transition-colors block mb-1">
                                            contact@diamondclean.ro
                                        </a>
                                        <p className="text-sm text-slate-500">Răspundem în maxim 30 minute.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-accent group-hover:scale-110 transition-transform duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1 text-white">Zonă Acoperire</h4>
                                        <p className="text-lg font-semibold text-white mb-1">București & Ilfov</p>
                                        <p className="text-sm text-slate-500">Deplasare gratuită în oraș.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass p-6 rounded-2xl border border-white/10">
                                <h4 className="font-bold mb-4 flex items-center gap-2 text-white">
                                    <CheckCircle className="w-5 h-5 text-accent" />
                                    De ce să ne alegi?
                                </h4>
                                <ul className="space-y-3 text-slate-400">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div>Ofertă transparentă, fără costuri ascunse</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div>Echipă asigurată și verificată</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-accent"></div>Garanția satisfacției 100%</li>
                                </ul>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="glass-card rounded-3xl p-8 lg:p-10 relative border border-white/10">
                            <h3 className="mb-8 text-2xl font-bold">Trimite un Mesaj</h3>
                            <form className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-slate-300">Nume</label>
                                        <input type="text" placeholder="Numele tău" className="bg-primary/50 border-white/10 focus:border-accent text-white" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-slate-300">Telefon</label>
                                        <input type="tel" placeholder="07xx..." className="bg-primary/50 border-white/10 focus:border-accent text-white" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-slate-300">Serviciu Dorit</label>
                                    <select className="bg-primary/50 border-white/10 focus:border-accent text-white">
                                        <option className="bg-primary text-slate-300">Selectează un serviciu...</option>
                                        <option className="bg-primary text-white">Curățare Canapele</option>
                                        <option className="bg-primary text-white">Curățenie Generală</option>
                                        <option className="bg-primary text-white">Curățenie Birou</option>
                                        <option className="bg-primary text-white">După Constructor</option>
                                        <option className="bg-primary text-white">Altul</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2 text-slate-300">Detalii (mp, locație, etc.)</label>
                                    <textarea rows="4" placeholder="Spune-ne mai multe despre ce ai nevoie..." className="bg-primary/50 border-white/10 focus:border-accent text-white resize-none"></textarea>
                                </div>

                                <button type="button" className="btn btn-primary w-full mt-4 justify-center group text-lg shadow-xl shadow-accent/10">
                                    Trimite Cererea <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-xs text-center text-slate-500 mt-4">
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
