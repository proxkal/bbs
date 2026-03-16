import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="bg-white py-12 md:py-14 overflow-hidden" id="contacts">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        {/* En-tête de section Moderniste */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8 border-b border-slate-200 pb-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-slate-900">Contactez-nous</h2>
            <p className="text-xl font-bold tracking-tight text-slate-400 uppercase">
              Audit & Configuration de vos <span className="text-[#007A7A]">projets industriels</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Bloc d'informations Techniques (Gris Industriel / Blanc) */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Adresse Siège */}
              <div className="bg-slate-50 p-6 border-l-4 border-[#007A7A] hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white rounded-lg text-[#007A7A] shadow-sm group-hover:bg-[#007A7A] group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-black uppercase italic tracking-tighter text-slate-900 text-xl">Siège Social</h3>
                </div>
                <p className="text-slate-600 font-bold uppercase leading-tight text-sm">
                  BP 391, derrière la clinique mandji <br/> 
                  à côté base militaire, <br/> 
                  <span className="text-slate-900">Port-Gentil, GABON</span>
                </p>
              </div>

              {/* Ligne Directe */}
              <div className="bg-slate-50 p-6 border-l-4 border-[#007A7A] hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white rounded-lg text-[#007A7A] shadow-sm group-hover:bg-[#007A7A] group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-black uppercase italic tracking-tighter text-slate-900 text-xl">Téléphone</h3>
                </div>
                <p className="text-slate-900 font-bold leading-tight text-lg">+241 077 36 63 28</p>
              </div>

              {/* Email Pro */}
              <div className="bg-slate-50 p-6 border-l-4 border-[#007A7A] hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white rounded-lg text-[#007A7A] shadow-sm group-hover:bg-[#007A7A] group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-black uppercase italic tracking-tighter text-slate-900 text-xl">E-mail</h3>
                </div>
                <p className="text-slate-900 font-bold leading-tight text-lg lowercase">pascal.bouyedi@gmail.com</p>
              </div>

              {/* Horaires */}
              <div className="bg-slate-50 p-6 border-l-4 border-[#007A7A] hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white rounded-lg text-[#007A7A] shadow-sm group-hover:bg-[#007A7A] group-hover:text-white transition-colors">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-black uppercase italic tracking-tighter text-slate-900 text-xl">Horaires</h3>
                </div>
                <p className="text-slate-600 font-bold uppercase leading-tight text-sm">
                  Lundi - Vendredi <br/>
                  <span className="text-slate-900 text-lg">08:00 - 17:00</span>
                </p>
              </div>

            </div>

          </div>

          {/* Bloc Visuel Impactant */}
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl min-h-[360px] lg:min-h-[420px]">
            <img
              src="/assets/bbscontainer/container bleu.jpg"
              alt="Solutions BBS"
              className="absolute inset-0 w-full h-full object-cover grayscale-0 transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            
          </div>

        </div>
      </div>
    </section>
  );
};


export default ContactSection;
