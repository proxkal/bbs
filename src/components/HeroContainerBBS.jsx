import React from 'react';
import { ChevronRight, ShieldCheck, MapPin, Award, Users } from 'lucide-react';

const HeroContainerBBS = ({ onLearnMoreClick }) => {
  return (
    <div className="relative bg-[#0f172a] min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image Subtile */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="/assets/bbscontainer/projet-phase3-structure-finie.jpg" 
          alt="BBS Industrial Site" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      {/* Overlay de texture industrielle (Grille de précision) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* Dégradé de lumière BBS Green */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#007A7A]/20 rounded-full blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            {/* Badge de Leadership */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-full mb-8">
              <Award className="w-4 h-4 text-[#007A7A]" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Leader du Marché au Gabon</span>
            </div>

            {/* Titre Identitaire BBS */}
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic mb-6">
              Location & <br/>
              <span className="text-[#007A7A]">Aménagement</span> <br/>
              Conteneur
            </h1>

            {/* Argumentaire BBS */}
            <p className="text-lg text-white leading-relaxed border-l-4 border-[#007A7A] pl-6 mb-10">
              <span className="text-white font-bold italic">BOUYEDI BUSINESS SERVICES</span> redéfinit l'espace de travail industriel. 
              De la customisation de containers (Bureaux, Ateliers) au placement de personnel qualifié, 
              nous accompagnons les leaders du secteur Pétrolier et BTP à <span className="text-white">Port-Gentil et sur tout le territoire.</span>
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button
                onClick={onLearnMoreClick}
                className="bg-[#007A7A] hover:bg-[#005f5f] text-white font-black py-4 px-10 rounded-sm transition-all uppercase tracking-wider text-sm shadow-xl"
              >
                En Savoir +
              </button>
            </div>
          </div>

          {/* Côté Droit : Visualisation Technique (Blueprint ou Photo Action) */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img 
                src="/assets/bbscontainer/container bleu.jpg" 
                alt="Container Aménagé BBS" 
                className="w-full h-[500px] object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent"></div>
            </div>
            
            {/* Décoration géométrique arrière-plan */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-r-8 border-b-8 border-[#007A7A]/20 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroContainerBBS;
