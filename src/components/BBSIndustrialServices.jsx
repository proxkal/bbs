import React from 'react';
import { motion } from 'framer-motion';
import BBSLogo from './BBSLogo';

const services = [
  {
    id: "01",
    tag: "LOG-MODULAIRE",
    title: "Vente & Location",
    subtitle: "Containers maritimes & offshore",
    image: "/assets/bbscontainer/container bleu.jpg", 
    unit: "LEADER-GABON"
  },
  {
    id: "02",
    tag: "CUSTOM-DESIGN",
    title: "Aménagement & Tôlerie",
    subtitle: "Bureaux, Ateliers, Découpe de taule",
    image: "/assets/bbscontainer/travaux-soudure-interne.jpg",
    unit: "EXPERT-MODULAR"
  },
  {
    id: "03",
    tag: "SOUDURE-PRO",
    title: "Soudure & Assemblage",
    subtitle: "Travaux haute précision sur site",
    image: "/assets/bbscontainer/Travaux génie civil site Mboumba GOC soudure toiture.jpeg",
    unit: "ENG-WORKS"
  },
  {
    id: "04",
    tag: "FINITION-PEINTURE",
    title: "Peinture & Traitement",
    subtitle: "Protection anti-corrosion marine",
    image: "/assets/bbscontainer/travaux-peinture-externe.jpg",
    unit: "HSE-STANDARDS"
  },
  {
    id: "05",
    tag: "RH-GABON",
    title: "Personnel Qualifié",
    subtitle: "Gestion & Placement expert",
    image: "/assets/bbscontainer/equipe bbs.jpeg",
    unit: "HR-FLEET"
  },
  {
    id: "06",
    tag: "OFF-SHORE",
    title: "DNV 2.7-1 & GOC",
    subtitle: "Remise en conformité certifiée",
    image: "/assets/bbscontainer/Travaux génie civil site Mboumba GOC banc de comptage.jpeg",
    unit: "PETRO-06"
  }
];

const BBSIndustrialServices = () => {
  return (
    <section className="bg-[#0f172a] py-24 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête avec Logo Officiel */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 border-b border-slate-800 pb-12">
          <BBSLogo className="mb-8 md:mb-0" />
          
          <div className="text-right">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic leading-none">
              Nos Métiers <span className="text-[#007A7A]">.</span>
            </h2>
            <p className="text-[10px] font-mono font-bold tracking-[0.4em] text-slate-500 uppercase mt-2">
              Expertise Transformation GABON
            </p>
          </div>
        </div>

        {/* Grille Typographic Index */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800 border border-slate-800">
          {services.map((s, i) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group bg-[#111827] p-10 h-[420px] flex flex-col justify-between hover:bg-[#020617] transition-all duration-500"
            >
              {/* Le "Action Shot" Circulaire (Micro-Vignette) */}
              <div className="flex justify-between items-start z-10">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-[#007A7A] transition-all duration-700">
                  <img 
                    src={s.image} 
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-all duration-1000"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=BBS+Workshop"; }} 
                  />
                </div>
                
                {/* Index Géant (Background) */}
                <span className="text-9xl font-black text-slate-800/30 group-hover:text-[#007A7A]/10 transition-colors font-mono tracking-tighter">
                  {s.id}
                </span>
              </div>

              {/* Bloc Texte */}
              <div className="z-10 mt-6">
                <div className="flex items-center space-x-2 mb-3">
                   <div className="w-2 h-2 bg-[#007A7A] rounded-full shadow-[0_0_12px_#007A7A]"></div>
                   <span className="text-[10px] font-bold tracking-widest text-[#007A7A] uppercase font-mono">
                     {s.tag}
                   </span>
                </div>
                
                <h3 className="text-2xl font-bold uppercase tracking-tight leading-tight">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm mt-2 italic">
                  {s.subtitle}
                </p>

                {/* Unité technique style blueprint */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-slate-600 bg-slate-900 border border-slate-800 px-3 py-1 rounded">
                    /{s.unit}
                  </span>
                  <div className="h-[1px] w-12 bg-slate-800 group-hover:w-28 group-hover:bg-[#007A7A] transition-all duration-700"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BBSIndustrialServices;
