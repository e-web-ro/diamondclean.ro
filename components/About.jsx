
import { CheckCircle, Users, Award, Shield } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: "Echipă Profesionistă",
    description: "Personal calificat, verificat și instruit constant pentru a oferi servicii premium."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-accent" />,
    title: "Eco-Friendly",
    description: "Folosim doar produse ecologice și echipamente de ultimă generație sigure pentru familia ta."
  },
  {
    icon: <Award className="w-8 h-8 text-accent" />,
    title: "Garanția Calității",
    description: "Dacă nu ești 100% mulțumit, revenim și remediem problema gratuit."
  },
  {
    icon: <Shield className="w-8 h-8 text-accent" />,
    title: "Asigurare Inclusă",
    description: "Serviciile noastre sunt complet asigurate pentru liniștea ta deplină."
  }
];

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            {/* Placeholder for About Image - could be a team photo or process shot */}
            <div className="glass-card p-2 relative overflow-hidden rounded-2xl aspect-square bg-slate-100 flex items-center justify-center">
               <span className="text-muted text-4xl font-bold opacity-20">Diamond Clean Team</span>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">10+ Ani</p>
                  <p className="text-sm text-muted">Experiență în domeniu</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-accent font-semibold tracking-wider uppercase mb-2">Despre Noi</h4>
            <h2 className="mb-6">Cine Suntem <span className="text-primary">Diamond Clean</span>?</h2>
            <p className="text-lg text-muted mb-6">
              Suntem mai mult decât o firmă de curățenie. Suntem partenerul tău de încredere pentru un stil de viață sănătos și confortabil. 
              Povestea noastră a început din dorința de a ridica standardele serviciilor de curățenie din România la un nivel premium.
            </p>
            <p className="text-muted mb-8">
              Cu o atenție meticuloasă la detalii și o pasiune pentru perfecțiune, tratăm fiecare casă sau birou ca și cum ar fi al nostru. 
              Investim constant în tehnologie și în pregătirea oamenilor noștri pentru a-ți oferi nu doar curățenie, ci timp liber pentru ceea ce contează cu adevărat.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-primary">{feature.title}</h3>
                    <p className="text-sm text-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
