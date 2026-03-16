import React from 'react';
import { motion } from 'framer-motion';
import { Paintbrush, Wrench, Package, Users, ShieldCheck } from 'lucide-react';

const galleryItems = [
  {
    id: '01',
    title: 'GOC Mboumba - Banc de comptage',
    description: 'Travaux de génie civil et installation de banc de comptage sur le site GOC Mboumba.',
    icon: <Package className="w-6 h-6 text-[#007A7A]" />,
    image: '/assets/bbscontainer/Travaux génie civil site Mboumba GOC banc de comptage.jpeg'
  },
  {
    id: '02',
    title: 'GOC Mboumba - Merlon béton',
    description: 'Construction de merlons en béton pour la protection des installations industrielles GOC.',
    icon: <ShieldCheck className="w-6 h-6 text-[#007A7A]" />,
    image: '/assets/bbscontainer/Travaux génie civil site Mboumba GOC merlon en béton.jpeg'
  },
  {
    id: '03',
    title: 'Assala Yendzi - Boulangerie',
    description: 'Génie civil pour la construction de la nouvelle boulangerie sur le site Assala Yendzi.',
    icon: <Users className="w-6 h-6 text-[#007A7A]" />,
    image: '/assets/bbscontainer/Travaux génie civil site Yendzi Assala construction de la nouvelle boulangerie.jpeg'
  },
  {
    id: '04',
    title: 'GOC Mboumba - Soudure Toiture',
    description: 'Travaux de soudure haute précision pour la structure de toiture sur le site GOC.',
    icon: <Wrench className="w-6 h-6 text-[#007A7A]" />,
    image: '/assets/bbscontainer/Travaux génie civil site Mboumba GOC soudure toiture.jpeg'
  },
  {
    id: '05',
    title: 'Aménagement Conteneur Bleu',
    description: 'Transformation complète de conteneur maritime en espace de travail fonctionnel.',
    icon: <Package className="w-6 h-6 text-[#007A7A]" />,
    image: '/assets/bbscontainer/container bleu.jpg'
  },
  {
    id: '06',
    title: 'Équipe BBS - Chantier',
    description: 'Nos équipes techniques en opération sur site pétrolier au Gabon.',
    icon: <Users className="w-6 h-6 text-[#007A7A]" />,
    image: '/assets/bbscontainer/equipe bbs.jpeg'
  },
  {
    id: '07',
    title: 'Maintenance Toiture Industrielle',
    description: 'Installation et étanchéité de toitures pour structures modulaires.',
    icon: <ShieldCheck className="w-6 h-6 text-[#007A7A]" />,
    image: '/assets/bbscontainer/equipe-toiture.jpg'
  },
  {
    id: '08',
    title: 'Soudure Interne Précision',
    description: 'Aménagement intérieur et soudure de structures métalliques sur mesure.',
    icon: <Wrench className="w-6 h-6 text-[#007A7A]" />,
    image: '/assets/bbscontainer/travaux-soudure-interne.jpg'
  },
  {
    id: '09',
    title: 'Peinture & Finition Externe',
    description: 'Traitement anti-corrosion et peinture industrielle pour conteneurs maritimes.',
    icon: <Paintbrush className="w-6 h-6 text-[#007A7A]" />,
    image: '/assets/bbscontainer/travaux-peinture-externe.jpg'
  }
];

const BBSIndustrialGallery = () => {
  return (
    <section id="projets" className="bg-[#0f172a] py-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête de section (similaire à "Nos Métiers") */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-slate-800 pb-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">
              Notre Savoir-Faire <span className="text-[#007A7A]">en Images</span>
            </h2>
            <p className="text-xl font-bold tracking-tight text-slate-300">
              PROJETS RÉALISÉS <span className="text-[#007A7A]">PAR NOS ÉQUIPES</span>
            </p>
          </div>
          <div className="mt-6 md:mt-0 text-right opacity-70">
            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-slate-500 uppercase">
              Bouyedi Business & Services
            </span>
          </div>
        </div>

        {/* Grille de la Galerie Photo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-[#111827] rounded-lg overflow-hidden group border border-slate-800 hover:border-[#007A7A]/50 transition-all duration-300 shadow-xl"
            >
              {/* Image avec effet de mise en avant au survol */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=BBS+Chantier"; }}
                />
              </div>

              {/* Contenu textuel */}
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  {item.icon}
                  <h3 className="text-lg font-bold uppercase text-white group-hover:text-[#007A7A] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Overlay subtile au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#007A7A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Pied de page de la galerie */}
        <div className="mt-20 text-center text-slate-600 text-sm italic opacity-70">
          <p>Toutes les photos sont des réalisations de BBS au Gabon.</p>
        </div>

      </div>
    </section>
  );
};

export default BBSIndustrialGallery;
