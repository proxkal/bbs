import React from 'react';
import { Container, Wrench, ShieldCheck, Truck, Droplets, Hammer, Anchor, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const containerServices = [
  {
    title: "Vente & Location",
    desc: "Leader au Gabon : Conteneurs maritimes et offshore neufs ou d'occasion.",
    icon: <Container className="w-6 h-6" />,
    tags: ["DNV 2.7-1", "Standard ISO"],
    image: "/assets/bbscontainer/container bleu.jpg"
  },
  {
    title: "Customisation & Aménagement",
    desc: "Transformation sur mesure : Bureaux, ateliers, plomberie et électricité intégrée.",
    icon: <Hammer className="w-6 h-6" />,
    tags: ["Bureaux", "Ateliers", "Vie de Base"],
    image: "/assets/bbscontainer/travaux-soudure-interne.jpg"
  },
  {
    title: "Récupération & Maintenance",
    desc: "Expertise sur sites pétroliers : Maintenance de toitures et structures modulaires.",
    icon: <ShieldCheck className="w-6 h-6" />,
    tags: ["Maintenance", "Étanchéité"],
    image: "/assets/bbscontainer/equipe-toiture.jpg"
  },
  {
    title: "Ingénierie Pétrolière GOC",
    desc: "Projets majeurs : Pose de bancs de comptage et merlons sur le site GOC Mboumba.",
    icon: <Anchor className="w-6 h-6" />,
    tags: ["GOC Mboumba", "Banc de Comptage"],
    image: "/assets/bbscontainer/Travaux génie civil site Mboumba GOC banc de comptage.jpeg"
  },
  {
    title: "Génie Civil Assala",
    desc: "Réalisations d'envergure : Construction de la boulangerie sur le site Assala Yendzi.",
    icon: <Wrench className="w-6 h-6" />,
    tags: ["Assala Yendzi", "BTP Industriel"],
    image: "/assets/bbscontainer/Travaux génie civil site Yendzi Assala construction de la nouvelle boulangerie.jpeg"
  },
  {
    title: "Logistique & RH",
    desc: "Mise à disposition de personnel qualifié pour les opérations pétrolières au Gabon.",
    icon: <Truck className="w-6 h-6" />,
    tags: ["Main d'œuvre", "Logistique"],
    image: "/assets/bbscontainer/equipe bbs.jpeg"
  }
];

const ContainerSolutions = () => {
  return (
    <section id="services" className="bg-[#050505] py-24 text-white border-y border-[#1a1a1a] relative overflow-hidden">
      {/* Grille de fond millimétrée très sombre */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#007A7A 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* En-tête simplifié */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-slate-800 pb-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white">
              Nos Services
            </h2>
            <p className="text-xl font-bold tracking-tight text-[#007A7A] uppercase">
              Ingénierie, Logistique & Solutions Conteneurs
            </p>
          </div>
        </div>

        {/* Matrice de Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {containerServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative bg-[#0a0a0a] border border-[#1a1a1a] p-0 hover:border-[#007A7A]/50 transition-all duration-300 flex overflow-hidden min-h-[160px] sm:min-h-[280px]"
            >
              
              {/* Côté Gauche : Données Techniques */}
              <div className="flex-1 p-5 md:p-8 flex flex-col justify-center sm:justify-between relative z-10 bg-[#0a0a0a]">
                <div>
                  <h3 className="text-lg md:text-3xl font-black uppercase italic leading-tight mb-2 sm:mb-4 group-hover:text-[#007A7A] transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-[10px] sm:text-base leading-snug sm:leading-relaxed font-bold uppercase tracking-tight opacity-90 line-clamp-3 sm:line-clamp-none">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Côté Droit : Aperçu Visuel compact sur mobile */}
              <div className="w-20 sm:w-32 border-l border-[#1a1a1a] relative overflow-hidden sm:group-hover:w-64 transition-all duration-700 ease-in-out shrink-0">
                <img 
                  src={service.image} 
                  className="absolute inset-0 w-full h-full object-cover sm:group-hover:scale-110 transition-all duration-700" 
                  alt={service.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#050505]/60 sm:group-hover:to-transparent transition-all"></div>
              </div>

              {/* Ligne latérale d'accentuation BBS Green */}
              <div className="absolute left-0 top-0 w-1 h-0 bg-[#007A7A] group-hover:h-full transition-all duration-500 shadow-[4px_0_15px_rgba(0,122,122,0.4)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContainerSolutions;
