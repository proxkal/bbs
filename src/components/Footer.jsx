import React from 'react';
import { MapPin, Phone, Mail, User, Briefcase, Shield } from 'lucide-react';
import BBSLogo from './BBSLogo';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Identité BBS */}
        <div className="space-y-6">
          <div className="flex flex-col space-y-4">
            {/* Logo officiel BBS */}
            <BBSLogo className="scale-110" />
          </div>
          <p className="text-sm leading-relaxed italic">
            "L'excellence opérationnelle au service de l'industrie pétrolière et navale."
          </p>
        </div>

        {/* Activités & Prestations */}
        <div>
          <h3 className="text-white font-bold mb-6 text-sm flex items-center">
            <Briefcase className="w-4 h-4 mr-2 text-bbs-green" /> ACTIVITÉS PRESTATAIRE
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start"><span className="text-bbs-green mr-2">•</span> Gestion & Placement de personnel</li>
            <li className="flex items-start"><span className="text-bbs-green mr-2">•</span> Construction tous corps d'État</li>
            <li className="flex items-start"><span className="text-bbs-green mr-2">•</span> Location & Vente de containers</li>
          </ul>
        </div>

        {/* Direction & Contact */}
        <div className="space-y-6">
          <h3 className="text-white font-bold mb-6 text-sm uppercase">Contact Direction</h3>
          <div className="space-y-4 text-sm bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-bbs-green" />
              <p className="">+241 077 36 63 28</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-bbs-green" />
              <p className="">pascal.bouyedi@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Localisation Port-Gentil */}
        <div>
          <h3 className="text-white font-bold mb-6 text-sm uppercase">Siège social</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-bbs-green shrink-0" />
              <p>
                BP 391, derrière la clinique mandji <br />
                à côté base militaire<br />
                <span className="font-bold text-white">Port-Gentil, GABON</span>
              </p>
            </div>
            <div className="mt-4 rounded border border-slate-700 overflow-hidden">
              <iframe
                title="Localisation BBS - Clinique Mandji"
                src="https://www.google.com/maps?q=Clinique%20Mandji%2C%20Port-Gentil%2C%20Gabon&output=embed"
                width="100%"
                height="140"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest">
        <p>© 2026 BOUYEDI BUSINESS & SERVICES (BBS). TOUS DROITS RÉSERVÉS.</p>
      </div>
    </footer>
  );
};

export default Footer;