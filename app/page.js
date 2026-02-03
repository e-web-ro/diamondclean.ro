import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { ArrowRight, Star, Shield, Users, Sparkles, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Simple Teaser Components for Landing Page
function AboutTeaser() {
  return (
    <section className="section bg-primary-light">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative group">
            <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Professional Team"
              width={800}
              height={600}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-primary to-transparent z-20">
              <div className="glass p-4 rounded-xl inline-block backdrop-blur-md border border-white/10">
                <p className="text-white font-bold text-lg">Echipă Certificată</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-2 block">Cine Suntem</span>
            <h2 className="mb-6">Standardul de Aur în <br /><span className="text-gradient">Curățenie Profesională</span></h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Nu suntem doar o firmă de curățenie, ci partenerii tăi pentru un stil de viață sănătos și productiv.
              Folosim tehnologie de ultimă oră și produse eco-friendly sigure pentru familia ta.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors">
                <Star className="w-8 h-8 text-accent mb-3" />
                <div className="font-bold text-white text-lg">Premium</div>
                <p className="text-sm text-slate-500 mt-1">Calitate fără compromis</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors">
                <Shield className="w-8 h-8 text-secondary mb-3" />
                <div className="font-bold text-white text-lg">Sigur</div>
                <p className="text-sm text-slate-500 mt-1">100% Asigurat & Verificat</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors">
                <Users className="w-8 h-8 text-emerald-400 mb-3" />
                <div className="font-bold text-white text-lg">Dedicat</div>
                <p className="text-sm text-slate-500 mt-1">Echipă stabilă & instruită</p>
              </div>
            </div>

            <Link href="/despre-noi" className="btn btn-outline text-white hover:text-white border-white/20">
              Povestea Noastră <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesTeaser() {
  return (
    <section className="section bg-primary relative">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container">
        <div className="text-center mb-16">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-2 block">Serviciile Noastre</span>
          <h2 className="mb-6">Soluții Complete pentru <br />Orice Tip de Spațiu</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            De la garsoniere la spații comerciale vaste, tratăm fiecare cm² cu atenție obsesivă la detalii.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Highlighted */}
          <div className="md:col-span-2 glass-card rounded-3xl overflow-hidden relative group min-h-[300px] flex flex-col justify-end p-8 border border-white/10 hover:border-accent/50 transition-colors">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1632980121711-d142ca47dbe6?w=1200&q=80"
                alt="Sofa Cleaning"
                width={1000}
                height={800}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-lg">
              <div className="bg-accent/20 p-2 rounded-lg inline-block mb-4 backdrop-blur-md">
                <Sparkles className="w-6 h-6 text-accent-light" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">Curățare Canapele Premium</h3>
              <p className="text-slate-300 mb-6">Tehnologie injecție-extracție pentru o igienizare profundă care elimină 99.9% din acarieni și alergeni. Redăm viața tapițeriei tale.</p>
              <Link href="/servicii" className="inline-flex items-center text-accent hover:text-white font-semibold transition-colors">
                Vezi Detalii <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield className="w-24 h-24 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3 text-white">Curățenie Generală</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Transformare totală a locuinței. Spălare geamuri, degresare bucătărie, dezinfectare băi  totul inclus.
              </p>
              <div className="w-full h-px bg-white/10 mb-6"></div>
              <Link href="/servicii" className="btn-outline px-4 py-2 text-xs rounded-lg w-full justify-between group-hover:bg-white/5">
                Detalii <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-accent/30 transition-all hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Users className="w-24 h-24 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-3 text-white">Spații Comerciale</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Soluții B2B personalizate. Program flexibil (noaptea/weekend) pentru a nu perturba activitatea.
              </p>
              <div className="w-full h-px bg-white/10 mb-6"></div>
              <Link href="/servicii" className="btn-outline px-4 py-2 text-xs rounded-lg w-full justify-between group-hover:bg-white/5">
                Soluții Business <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Card 4 - CTA */}
          <div className="md:col-span-2 bg-gradient-to-r from-accent to-secondary rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Nu găsești ce cauți?</h3>
              <p className="text-blue-100">Oferim pachete personalizate pentru nevoi specifice.</p>
            </div>
            <div className="relative z-10">
              <Link href="/contact" className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
                Cere Ofertă Personalizată
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center bg-fixed z-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent z-20"></div>

      <div className="container relative z-30 text-center">
        <div className="inline-block p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg mb-8">
          <Star className="w-6 h-6 text-accent animate-pulse" />
        </div>

        <h2 className="text-white mb-6 text-4xl md:text-6xl max-w-4xl mx-auto leading-tight">
          Gata să transformi <span className="text-gradient">casa ta?</span>
        </h2>

        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Programează acum o vizită sau cere o ofertă gratuită.
          Răspundem în maxim 30 de minute.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="btn btn-primary btn-lg shadow-2xl shadow-accent/20">
            Contactează-ne Acum
          </Link>
          <a href="tel:0774494671" className="btn btn-outline btn-lg border-white/20 text-white hover:bg-white/10">
            <Phone className="w-5 h-5 mr-2" /> 0774.494.671
          </a>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="bg-primary">
      <Navbar />
      <Hero />
      <ServicesTeaser />
      <AboutTeaser />
      <CallToAction />
      <Footer />
    </main>
  );
}
