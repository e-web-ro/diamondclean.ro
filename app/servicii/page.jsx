import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sofa, Building2, Home, Sparkles, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServiciiPage() {
    return (
        <main className="bg-primary min-h-screen text-slate-200">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-20 relative overflow-hidden text-center">
                <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary/20 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/4"></div>

                <div className="container relative z-10">
                    <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Ce Oferim</span>
                    <h1 className="text-white mb-6">Servicii Profesionale de <span className="text-gradient">Curățenie</span></h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Oferim o gamă completă de servicii adaptate nevoilor tale, folosind cele mai bune echipamente și soluții din industrie.
                        Calitate premium, garantată.
                    </p>
                </div>
            </section>

            {/* Service 1: Canapele */}
            <section className="section py-16" id="canapele">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="glass p-4 inline-block rounded-2xl mb-8 border border-white/10">
                                <Sofa className="w-8 h-8 text-accent" />
                            </div>
                            <h2 className="mb-6 text-3xl">Curățare Canapele și Tapițerii</h2>
                            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                                Metoda noastră de injecție-extracție elimină murdăria din profunzime, nu doar de la suprafață.
                                Redăm culorile vii și eliminăm 99% din bacterii și acarieni.
                            </p>
                            <ul className="flex flex-col gap-4 mb-10">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    Uscare rapidă (4-6 ore)
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    Soluții speciale antialergice
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    Îndepărtare pete dificile (vin, cafea)
                                </li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary shadow-lg shadow-accent/20">
                                Programează Curățare
                            </Link>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-blue-600 rounded-2xl rotate-2 blur-lg opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1632980121711-d142ca47dbe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Curatare canapea"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 2: General Cleaning */}
            <section className="section py-16 bg-white/5 border-y border-white/5" id="generala">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative group">
                            <div className="absolute -inset-4 bg-gradient-to-l from-secondary to-purple-600 rounded-2xl -rotate-2 blur-lg opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1581578731117-104f2a41272c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Curatenie generala"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="glass p-4 inline-block rounded-2xl mb-8 border border-white/10">
                                <Home className="w-8 h-8 text-secondary" />
                            </div>
                            <h2 className="mb-6 text-3xl">Curățenie Generală</h2>
                            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                                Fie că e vorba de curățenia de primăvară, înainte de sărbători sau pur și simplu vrei un restart pentru casa ta,
                                noi ne ocupăm de tot, de la tavan până la podea.
                            </p>
                            <ul className="flex flex-col gap-4 mb-10">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    Ștergere praf toate suprafețele
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    Spălare geamuri și tocuri
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    Dezinfectare completă băi și bucătărie
                                </li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary shadow-lg shadow-secondary/20">
                                Cere Ofertă <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 3: Commercial */}
            <section className="section py-16" id="birouri">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="glass p-4 inline-block rounded-2xl mb-8 border border-white/10">
                                <Building2 className="w-8 h-8 text-purple-400" />
                            </div>
                            <h2 className="mb-6 text-3xl">Curățenie Birouri și Spații Comerciale</h2>
                            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                                Un spațiu de lucru curat crește productivitatea și moralul echipei.
                                Oferim abonamente flexibile pentru birouri, magazine și showroom-uri.
                            </p>
                            <ul className="flex flex-col gap-4 mb-10">
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    Program flexibil (non-stop)
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    Factură fiscală și contract
                                </li>
                                <li className="flex items-center gap-3 text-slate-300">
                                    <div className="bg-green-500/20 p-1.5 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                    Consumabile incluse opțional
                                </li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary shadow-lg shadow-purple-500/20">
                                Discută Abonament
                            </Link>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl rotate-2 blur-lg opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <Image
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Curatenie birouri"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values/Features Grid */}
            <section className="py-24 relative overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-card p-8 rounded-3xl border border-white/10 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">100% Asigurat</h3>
                            <p className="text-slate-400">Personal verificat și asigurare pentru orice eventualitate.</p>
                        </div>
                        <div className="glass-card p-8 rounded-3xl border border-white/10 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Zap className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Echipamente Pro</h3>
                            <p className="text-slate-400">Folosim tehnologie Kärcher de ultimă generație.</p>
                        </div>
                        <div className="glass-card p-8 rounded-3xl border border-white/10 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Sparkles className="w-8 h-8 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Eco Friendly</h3>
                            <p className="text-slate-400">Soluții sigure pentru copii și animale de companie.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
