import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Shield, Timer, Smile, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function DespreNoiPage() {
    return (
        <main className="bg-primary min-h-screen">
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-accent/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/4"></div>

                <div className="container text-center relative z-10">
                    <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Povestea Noastră</span>
                    <h1 className="mb-6">
                        Pasiune pentru <span className="text-gradient">Curățenie</span>,<br />
                        Respect pentru Timpul Tău
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        DiamondClean a luat naștere din dorința de a oferi servicii de curățenie la un standard nemaiîntâlnit în București.
                        Nu curățăm doar spații, ci creăm medii sănătoase și confortabile pentru clienții noștri.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="section py-0 pb-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-accent to-secondary rounded-2xl rotate-3 blur-lg opacity-40 group-hover:opacity-60 transition-opacity -z-10"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Echipa noastra la lucru"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl shadow-xl border border-white/10 max-w-xs backdrop-blur-xl">
                                <div className="flex gap-4 items-center">
                                    <div className="bg-green-500/20 p-3 rounded-full">
                                        <Smile className="w-8 h-8 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-white">500+</p>
                                        <p className="text-sm text-slate-400">Clienți super mulțumiți</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-8 text-3xl font-bold">De ce suntem <span className="text-accent">Diferiți</span>?</h3>
                            <div className="flex flex-col gap-10">
                                <div className="flex gap-5 items-start group">
                                    <div className="glass p-4 rounded-xl text-accent shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-white">Echipă Verificată și Instruită</h4>
                                        <p className="text-slate-400 leading-relaxed">
                                            Fiecare membru al echipei trece printr-un proces riguros de selecție și training.
                                            Nu trimitem pe nimeni la tine acasă fără să avem 100% încredere în ei.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 items-start group">
                                    <div className="glass p-4 rounded-xl text-accent shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-white">Siguranță și Asigurare</h4>
                                        <p className="text-slate-400 leading-relaxed">
                                            Suntem complet asigurați. Orice (puțin probabil) incident este acoperit,
                                            astfel încât tu să nu ai nicio grijă.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 items-start group">
                                    <div className="glass p-4 rounded-xl text-accent shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-white">Tehnologie de Vârf</h4>
                                        <p className="text-slate-400 leading-relaxed">
                                            Folosim echipamente profesionale Kärcher și soluții ecologice care curăță în profunzime
                                            fără a afecta sănătatea familiei sau a animalelor de companie.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="section bg-primary-light/30 border-t border-white/5">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="mb-4">Valorile Noastre</h2>
                        <p className="text-slate-400 max-w-xl mx-auto text-lg">
                            Principiile care ne ghidează în fiecare zi la muncă.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Integritate', icon: <CheckCircle className="w-8 h-8 text-accent" />, text: 'Facem ceea ce spunem. Suntem transparenți cu prețurile și serviciile.' },
                            { title: 'Punctualitate', icon: <Timer className="w-8 h-8 text-secondary" />, text: 'Timpul tău este prețios. Ajungem întotdeauna la ora stabilită.' },
                            { title: 'Excelență', icon: <Award className="w-8 h-8 text-purple-400" />, text: 'Nu plecăm până nu strălucește. Atenția la detalii este semnătura noastră.' }
                        ].map((item, idx) => (
                            <div key={idx} className="glass-card p-8 rounded-3xl border border-white/10 hover:border-accent/40 transition-all hover:-translate-y-2 text-center group">
                                <div className="bg-white/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
