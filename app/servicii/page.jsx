import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sofa, Building2, Home, Sparkles, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServiciiPage() {
    return (
        <main>
            <Navbar />

            <section className="pt-32 pb-16 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 blur-3xl rounded-full translate-x-1/2"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="text-white mb-6">Servicii Profesionale de Curățenie</h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Oferim o gamă completă de servicii adaptate nevoilor tale, folosind cele mai bune echipamente și soluții din industrie.
                    </p>
                </div>
            </section>

            {/* Service 1: Canapele */}
            <section className="section bg-white" id="canapele">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-blue-50 p-3 inline-block rounded-xl mb-6">
                                <Sofa className="w-10 h-10 text-accent" />
                            </div>
                            <h2 className="mb-4">Curățare Canapele și Tapițerii</h2>
                            <p className="text-muted mb-6 text-lg">
                                Metoda noastră de injecție-extracție elimină murdăria din profunzime, nu doar de la suprafață.
                                Redăm culorile vii și eliminăm 99% din bacterii și acarieni.
                            </p>
                            <ul className="flex flex-col gap-3 mb-8">
                                <li className="flex items-center gap-3 text-muted">
                                    <Check className="w-5 h-5 text-green-500" /> Uscare rapidă (4-6 ore)
                                </li>
                                <li className="flex items-center gap-3 text-muted">
                                    <Check className="w-5 h-5 text-green-500" /> Soluții speciale antialergice
                                </li>
                                <li className="flex items-center gap-3 text-muted">
                                    <Check className="w-5 h-5 text-green-500" /> Îndepărtare pete dificile (vin, cafea, mâncare)
                                </li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">
                                Programează Curățare
                            </Link>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1632980121711-d142ca47dbe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Curatare canapea" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 2: General Cleaning */}
            <section className="section bg-slate-50" id="generala">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1581578731117-104f2a41272c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Curatenie generala" />
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="bg-blue-50 p-3 inline-block rounded-xl mb-6">
                                <Home className="w-10 h-10 text-accent" />
                            </div>
                            <h2 className="mb-4">Curățenie Generală</h2>
                            <p className="text-muted mb-6 text-lg">
                                Fie că e vorba de curățenia de primăvară, înainte de sărbători sau pur și simplu vrei un restart pentru casa ta,
                                noi ne ocupăm de tot, de la tavan până la podea.
                            </p>
                            <ul className="flex flex-col gap-3 mb-8">
                                <li className="flex items-center gap-3 text-muted">
                                    <Check className="w-5 h-5 text-green-500" /> Ștergere praf toate suprafețele accesibile
                                </li>
                                <li className="flex items-center gap-3 text-muted">
                                    <Check className="w-5 h-5 text-green-500" /> Spălare geamuri și tocuri (interior/exterior)
                                </li>
                                <li className="flex items-center gap-3 text-muted">
                                    <Check className="w-5 h-5 text-green-500" /> Dezinfectare completă băi și bucătărie
                                </li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">
                                Cere Ofertă <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service 3: Commercial */}
            <section className="section bg-white" id="birouri">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-blue-50 p-3 inline-block rounded-xl mb-6">
                                <Building2 className="w-10 h-10 text-accent" />
                            </div>
                            <h2 className="mb-4">Curățenie Birouri și Spații Comerciale</h2>
                            <p className="text-muted mb-6 text-lg">
                                Un spațiu de lucru curat crește productivitatea și moralul echipei.
                                Oferim abonamente flexibile pentru birouri, magazine și showroom-uri.
                            </p>
                            <ul className="flex flex-col gap-3 mb-8">
                                <li className="flex items-center gap-3 text-muted">
                                    <Check className="w-5 h-5 text-green-500" /> Program flexibil (înainte sau după orele de program)
                                </li>
                                <li className="flex items-center gap-3 text-muted">
                                    <Check className="w-5 h-5 text-green-500" /> Factură fiscală și contract
                                </li>
                                <li className="flex items-center gap-3 text-muted">
                                    <Check className="w-5 h-5 text-green-500" /> Consumabile incluse opțional
                                </li>
                            </ul>
                            <Link href="/contact" className="btn btn-primary">
                                Discută Abonament
                            </Link>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Curatenie birouri" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
