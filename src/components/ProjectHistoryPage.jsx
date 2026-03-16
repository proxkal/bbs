import React from 'react';
import { FolderKanban, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const projectGallery = [
  {
    fileName: '39ea306e-5768-4125-b6c7-e6b033b29990.jpeg',
    title: 'Intervention Terrain - Équipe BBS',
    description: 'Vue opérationnelle d\'une équipe mobilisée sur site pour les travaux industriels.',
  },
  {
    fileName: '444c47f9-4f66-4b8a-a611-55ad441540f7.jpeg',
    title: 'Travaux de Chantier - Suivi Technique',
    description: 'Progression des opérations avec supervision technique et coordination des équipes.',
  },
  {
    fileName: 'a57108cc-e618-419c-9a82-bddd6f8e3d10.jpeg',
    title: 'Exécution Opérationnelle',
    description: 'Déploiement terrain sur projet industriel avec moyens adaptés aux contraintes du site.',
  },
  {
    fileName: 'container 3.jpeg',
    title: 'Container - Vue Générale',
    description: 'Présentation d\'un module conteneur BBS prêt à l\'utilisation.',
  },
  {
    fileName: 'container bleu.jpg',
    title: 'Container Bleu - Aménagement Extérieur',
    description: 'Exemple de conteneur aménagé avec finition extérieure dédiée aux environnements industriels.',
  },
  {
    fileName: 'equipe bbs.jpeg',
    title: 'Équipe BBS - Mobilisation',
    description: 'Ressources humaines qualifiées mobilisées pour les opérations clients.',
  },
  {
    fileName: 'equipe test.jpeg',
    title: 'Équipe Technique - Préparation',
    description: 'Phase de préparation et de test avant intervention sur installations.',
  },
  {
    fileName: 'equipe-toiture.jpg',
    title: 'Travaux Toiture - Maintenance',
    description: 'Intervention de maintenance sur structures de toiture en contexte industriel.',
  },
  {
    fileName: 'projet-phase1-debut 1.jpg',
    title: 'Projet Phase 1 - Démarrage A',
    description: 'Premières opérations de mise en place sur la zone projet.',
  },
  {
    fileName: 'projet-phase1-debut.jpg',
    title: 'Projet Phase 1 - Démarrage B',
    description: 'Démarrage des travaux avec implantation des équipes et des moyens.',
  },
  {
    fileName: 'projet-phase2-montage-toit.jpg',
    title: 'Projet Phase 2 - Montage Toiture',
    description: 'Étape de montage de toiture avec contrôle qualité des assemblages.',
  },
  {
    fileName: 'projet-phase3-structure-finie.jpg',
    title: 'Projet Phase 3 - Structure Finalisée',
    description: 'Livrable structurel achevé après les phases de montage et de finition.',
  },
  {
    fileName: 'Travaux génie civil site Mboumba GOC banc de comptage.jpeg',
    title: 'GOC Mboumba - Banc de Comptage',
    description: 'Travaux de génie civil dédiés à l\'installation des bancs de comptage.',
  },
  {
    fileName: 'Travaux génie civil site Mboumba GOC merlon en béton.jpeg',
    title: 'GOC Mboumba - Merlon en Béton',
    description: 'Réalisation de merlons de protection en béton pour sécurisation des zones.',
  },
  {
    fileName: 'Travaux génie civil site Mboumba GOC soudure toiture.jpeg',
    title: 'GOC Mboumba - Soudure Toiture',
    description: 'Opérations de soudure sur toiture en environnement de chantier industriel.',
  },
  {
    fileName: 'Travaux génie civil site Yendzi Assala construction de la nouvelle boulangerie.jpeg',
    title: 'Assala Yendzi - Nouvelle Boulangerie',
    description: 'Construction de la nouvelle boulangerie avec coordination multi-corps d\'état.',
  },
  {
    fileName: 'Travaux génie civil.jpeg',
    title: 'Travaux de Génie Civil - Vue Site',
    description: 'Avancement général de travaux de génie civil en zone opérationnelle.',
  },
  {
    fileName: 'travaux-peinture-externe.jpg',
    title: 'Finition - Peinture Externe',
    description: 'Application de peinture externe pour protection et finition des modules.',
  },
  {
    fileName: 'travaux-soudure-interne.jpg',
    title: 'Atelier - Soudure Interne',
    description: 'Travaux de soudure interne lors des phases d\'aménagement et de renforcement.',
  },
];

const getImagePath = (fileName) => `/assets/bbscontainer/${encodeURIComponent(fileName)}`;

const ProjectHistoryPage = () => {
  return (
    <section id="galeries" className="bg-slate-950 py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#14b8a6 1px, transparent 1px)', backgroundSize: '22px 22px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-8 border-b border-slate-800 pb-5">
          <div className="inline-flex items-center gap-2 text-[#14b8a6] text-xs font-black uppercase tracking-[0.2em] mb-3">
            <FolderKanban size={16} />
            Galeries
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic text-white">
            Historique Des Projets
          </h2>
        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-5 [column-fill:_balance]">
          {projectGallery.map((project, index) => (
            <motion.article
              key={project.fileName}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
              className="mb-5 break-inside-avoid bg-slate-900/90 border border-slate-800 rounded-xl p-3 md:p-4 hover:border-[#14b8a6]/60 hover:shadow-[0_10px_25px_rgba(20,184,166,0.12)] transition-all duration-300"
            >
              <div className="inline-flex items-center gap-2 text-[#14b8a6] text-[11px] font-black uppercase tracking-wider mb-2">
                <ImageIcon size={14} />
                BOUYEDI BUSINESS & SERVICES
              </div>

              <div className="w-full rounded-lg overflow-hidden border border-slate-700 bg-slate-950 mb-3">
                <img
                  src={getImagePath(project.fileName)}
                  alt={project.title}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>

              <h3 className="text-lg md:text-xl font-black tracking-tight text-white uppercase italic mb-1">{project.title}</h3>
              <p className="text-slate-300 font-semibold leading-relaxed text-sm md:text-base">{project.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectHistoryPage;
