import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { ArrowRight, Star, Shield, Users } from 'lucide-react';
import Link from 'next/link';

// Simple Teaser Components for Landing Page
function AboutTeaser() {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3" alt="Team" />
          </div>
          <div>
            <span className="text-accent font-bold uppercase tracking-wider text-sm">Cine Suntem</span>
            <h2 className="mt-2 mb-4">Profesioniștii în Curățenie</h2>
            <p className="text-lg text-muted mb-6">
              Nu suntem doar o altă firmă de curățenie. Suntem partenerii tăi de încredere pentru un mediu sănătos.
              Cu o echipă verificată și echipamente de top, garantăm rezultate impecabile.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <Star className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="font-bold text-primary">Premium</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <Shield className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="font-bold text-primary">Sigur</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <Users className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="font-bold text-primary">Echipă</div>
              </div>
            </div>
            <Link href="/despre-noi" className="btn btn-outline text-primary">
              Află Povestea Noastră <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesTeaser() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Ce Putem Face Pentru Tine?</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Servicii complete adaptate nevoilor tale, de la curățarea canapelei până la curățenia generală a întregii case.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card hover:-translate-y-2 transition-transform p-0 overflow-hidden group">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1632980121711-d142ca47dbe6?w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Canapea" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Curățare Canapele</h3>
              <p className="text-muted text-sm mb-4">Igienizare profundă cu injecție-extracție. Elimină petele și acarienii.</p>
              <Link href="/servicii" className="text-accent font-semibold flex items-center hover:gap-2 transition-all">
                Vezi Detalii <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card hover:-translate-y-2 transition-transform p-0 overflow-hidden group">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581578731117-104f2a41272c?w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Generala" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Curățenie Generală</h3>
              <p className="text-muted text-sm mb-4">Curățenie completă pentru apartamente și case. Lăsăm totul lună.</p>
              <Link href="/servicii" className="text-accent font-semibold flex items-center hover:gap-2 transition-all">
                Vezi Detalii <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card hover:-translate-y-2 transition-transform p-0 overflow-hidden group">
            <div className="h-48 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Birou" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Spații Comerciale</h3>
              <p className="text-muted text-sm mb-4">Soluții business pentru birouri curate și angajați fericiți.</p>
              <Link href="/servicii" className="text-accent font-semibold flex items-center hover:gap-2 transition-all">
                Vezi Detalii <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/servicii" className="btn btn-primary px-8">
            Vezi Toate Serviciile
          </Link>
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="container relative z-10 text-center">
        <h2 className="text-white mb-6 text-4xl">Gata să ai o casă strălucitoare?</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Programează acum o vizită sau cere o ofertă gratuită.
          Răspundem rapid și ne adaptăm programului tău.
        </p>
        <Link href="/contact" className="btn bg-white text-primary hover:bg-slate-100 text-lg px-8 py-4 shadow-xl">
          Contactează-ne Acum
        </Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesTeaser />
      <AboutTeaser />
      <CallToAction />
      <Footer />
    </main>
  );
}
