'use client';
import { Sofa, Building2, Home, Sparkles } from 'lucide-react';

const services = [
    {
        icon: <Sofa size={32} />,
        title: 'Curățare Canapele',
        description: 'Redăm viața canapelei tale prin injecție-extracție. Eliminăm petele, acarienii și mirosurile neplăcute.'
    },
    {
        icon: <Home size={32} />,
        title: 'Curățenie Generală',
        description: 'Curățenie completă pentru apartamente și case. Ștergere praf, aspirare, spălare pardoseli, geamuri și igienizare baie/bucătărie.'
    },
    {
        icon: <Building2 size={32} />,
        title: 'Curățenie Birouri',
        description: 'Menține un mediu de lucru productiv și curat. Oferim abonamente flexibile pentru firma ta.'
    },
    {
        icon: <Sparkles size={32} />,
        title: 'După Constructor',
        description: 'Curățăm molozul, praful fin și urmele de vopsea. Vă lăsăm casa gata de mutat.'
    }
];

export default function Services() {
    return (
        <section id="servicii" className="section">
            <div className="container">
                <div className="text-center mb-4">
                    <h2 className="mb-2">Serviciile Noastre</h2>
                    <p style={{ color: 'var(--text-light)' }}>Soluții complete de curățenie adaptate nevoilor tale</p>
                </div>

                <div className="grid grid-cols-1 grid-cols-2" style={{ gap: '2rem' }}>
                    {services.map((service, index) => (
                        <div key={index} className="card text-center" style={{ padding: '3rem 2rem' }}>
                            <div style={{
                                color: 'var(--accent)',
                                background: 'var(--bg-off-white)',
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem auto'
                            }}>
                                {service.icon}
                            </div>
                            <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-light)' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
