import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Shield, Timer, Smile, CheckCircle } from 'lucide-react';

export default function DespreNoiPage() {
    return (
        <main>
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4"></div>
                <div className="container text-center">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Povestea Noastră</span>
                    <h1 className="mb-6">
                        Pasiune pentru <span className="text-gradient">Curățenie</span>,<br />
                        Respect pentru Timpul Tău
                    </h1>
                    <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                        DiamondClean a luat naștere din dorința de a oferi servicii de curățenie la un standard nemaiîntâlnit în București.
                        Nu curățăm doar spații, ci creăm medii sănătoase și confortabile pentru clienții noștri.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-accent/20 rounded-2xl rotate-3 blur-lg -z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Echipa noastra la lucru"
                                className="rounded-2xl shadow-xl w-full"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
                                <div className="flex gap-4 items-center">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <Smile className="w-8 h-8 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-primary">500+</p>
                                        <p className="text-sm text-muted">Clienți super mulțumiți</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-6 text-3xl">De ce suntem <span className="text-primary">Diferiți</span>?</h3>
                            <div className="flex flex-col gap-8">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary shrink-0">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Echipă Verificată și Instruită</h4>
                                        <p className="text-muted">
                                            Fiecare membru al echipei trece printr-un proces riguros de selecție și training.
                                            Nu trimitem pe nimeni la tine acasă fără să avem 100% încredere în ei.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary shrink-0">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Siguranță și Asigurare</h4>
                                        <p className="text-muted">
                                            Suntem complet asigurați. Orice (puțin probabil) incident este acoperit,
                                            astfel încât tu să nu ai nicio grijă.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary shrink-0">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Tehnologie de Vârf</h4>
                                        <p className="text-muted">
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
            <section className="section bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="mb-4">Valorile Noastre</h2>
                        <p className="text-muted max-w-xl mx-auto">
                            Principiile care ne ghidează în fiecare zi la muncă.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Integritate', icon: <checkCircle className="w-8 h-8 text-accent" />, text: 'Facem ceea ce spunem. Suntem transparenți cu prețurile și serviciile.' },
                            { title: 'Punctualitate', icon: <Timer className="w-8 h-8 text-accent" />, text: 'Timpul tău este prețios. Ajungem întotdeauna la ora stabilită.' },
                            { title: 'Excelență', icon: <Award className="w-8 h-8 text-accent" />, text: 'Nu plecăm până nu strălucește. Atenția la detalii este semnătura noastră.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 text-center">
                                <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
