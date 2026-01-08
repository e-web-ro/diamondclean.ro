'use client';
import { Sofa, Building2, Home, Sparkles, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: <Sofa className="w-8 h-8 text-accent" />,
        title: 'Curățare Canapele',
        description: 'Redăm viața canapelei tale prin injecție-extracție. Eliminăm petele, acarienii și mirosurile neplăcute.'
    },
    {
        icon: <Home className="w-8 h-8 text-accent" />,
        title: 'Curățenie Generală',
        description: 'Curățenie completă pentru apartamente și case. Ștergere praf, aspirare, spălare pardoseli, geamuri și igienizare baie/bucătărie.'
    },
    {
        icon: <Building2 className="w-8 h-8 text-accent" />,
        title: 'Curățenie Birouri',
        description: 'Menține un mediu de lucru productiv și curat. Oferim abonamente flexibile pentru firma ta.'
    },
    {
        icon: <Sparkles className="w-8 h-8 text-accent" />,
        title: 'După Constructor',
        description: 'Curățăm molozul, praful fin și urmele de vopsea. Vă lăsăm casa gata de mutat.'
    }
];

export default function Services() {
    return (
        <section id="servicii" className="section bg-slate-50">
            <div className="container">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">Ce Oferim</span>
                    <h2 className="mb-4">Soluții Complete de <span className="text-primary">Curățenie</span></h2>
                    <p className="text-lg text-muted">
                        Folosim echipamente profesionale și soluții dedicate pentru fiecare tip de suprafață, garantând rezultate impecabile.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="card group hover:bg-white text-left transition-all duration-300">
                            <div className="mb-6 inline-block p-4 rounded-2xl bg-blue-50 group-hover:bg-accent/10 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold group-hover:text-accent transition-colors">{service.title}</h3>
                            <p className="text-muted text-sm mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <a href="#contact" className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                                Cere ofertă <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

