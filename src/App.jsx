import { useEffect } from 'react';
import { CheckCircle, Clock, Truck, Users, CalendarCheck } from 'lucide-react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import HeroContainerBBS from './components/HeroContainerBBS';
import ClientLogos from './components/ClientLogos';
import ContainerSolutions from './components/ContainerSolutions';
import BBSIndustrialGallery from './components/BBSIndustrialGallery';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import ProjectHistoryPage from './components/ProjectHistoryPage';
import SEO from './components/SEO';

// --- Components (Built inside App.jsx for speed and user request) ---

const Hero = ({ onLearnMoreClick }) => <HeroContainerBBS onLearnMoreClick={onLearnMoreClick} />;

const Features = () => (
  <section className="bg-white py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center group">
          <div className="p-3 bg-slate-50 rounded-full mb-4 group-hover:bg-[#007A7A]/10 transition-colors">
            <Clock className="h-10 w-10 text-[#007A7A]" />
          </div>
          <h4 className="text-base font-black text-[#007A7A] uppercase tracking-widest mb-2">Disponibilité</h4>
          <span className="font-bold text-gray-900 uppercase tracking-tighter leading-tight text-sm md:text-base">
            Réactivité Opérationnelle Continue
          </span>
        </div>

        <div className="flex flex-col items-center group">
          <div className="p-3 bg-slate-50 rounded-full mb-4 group-hover:bg-[#007A7A]/10 transition-colors">
            <Truck className="h-10 w-10 text-[#007A7A]" />
          </div>
          <h4 className="text-base font-black text-[#007A7A] uppercase tracking-widest mb-2">Mobilité</h4>
          <span className="font-bold text-gray-900 uppercase tracking-tighter leading-tight text-sm md:text-base">
            Projection Logistique Territoriale
          </span>
        </div>

        <div className="flex flex-col items-center group">
          <div className="p-3 bg-slate-50 rounded-full mb-4 group-hover:bg-[#007A7A]/10 transition-colors">
            <Users className="h-10 w-10 text-[#007A7A]" />
          </div>
          <h4 className="text-base font-black text-[#007A7A] uppercase tracking-widest mb-2">Équipes</h4>
          <span className="font-bold text-gray-900 uppercase tracking-tighter leading-tight text-sm md:text-base">
            Expertise Technique Certifiée
          </span>
        </div>

        <div className="flex flex-col items-center group">
          <div className="p-3 bg-slate-50 rounded-full mb-4 group-hover:bg-[#007A7A]/10 transition-colors">
            <CalendarCheck className="h-10 w-10 text-[#007A7A]" />
          </div>
          <h4 className="text-base font-black text-[#007A7A] uppercase tracking-widest mb-2">Deadlines</h4>
          <span className="font-bold text-gray-900 uppercase tracking-tighter leading-tight text-sm md:text-base">
            Rigueur et Respect Contractuel
          </span>
        </div>
      </div>
    </div>
  </section>
);

const ContentWithImage = ({ imageLeft = false, title, description, items, image }) => (
    <section className="bg-slate-50 py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col md:flex-row gap-12 items-center ${imageLeft ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl uppercase italic">
                        {title}
                    </h2>
                    <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                        {description}
                    </p>
                    <ul className="mt-6 space-y-4">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-[#007A7A] shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/2 relative group hidden md:block">
                    <div className="absolute -inset-4 bg-[#007A7A]/10 rounded-xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                    <div className="relative h-96 w-full rounded-lg overflow-hidden border-4 border-white shadow-2xl">
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const HomePage = ({ onLearnMoreClick }) => (
  <>
    <Hero onLearnMoreClick={onLearnMoreClick} />
    <Features />
    <BBSIndustrialGallery />

    <ContentWithImage
      imageLeft={true}
      title="Expertise en Maintenance & Services"
      description="Au-delà des solutions modulaires, BBS assure la maintenance critique de vos infrastructures. Notre polyvalence nous permet d'intervenir sur la cimentation, le sablage, la peinture industrielle et la manutention lourde au Gabon."
      items={[
        'Maintenance préventive des cuves et systèmes de distribution.',
        'Travaux techniques : Cimentation, Sablage et Peinture industrielle.',
        'Manutention et logistique opérationnelle Onshore & Offshore.',
        'Mise aux normes environnementales et de sécurité.',
      ]}
      image="/assets/bbscontainer/travaux-soudure-interne.jpg"
    />

    <ContainerSolutions />
    <ClientLogos />
  </>
);

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage =
    location.pathname === '/contact'
      ? 'contact'
      : location.pathname === '/missions'
        ? 'missions'
        : 'home';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  const goToMissions = () => {
    navigate('/missions');
  };

  return (
    <div className="bg-white overflow-x-clip">
      <SEO page={currentPage} />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onLearnMoreClick={goToMissions} />} />
          <Route path="/missions" element={<ProjectHistoryPage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {currentPage !== 'contact' && <Footer />}
    </div>
  );
};

export default App;