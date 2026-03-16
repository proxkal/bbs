import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Ship, Wrench, Users, Truck, ArrowRight, X } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: "Logistique Modulaire",
    short: "Solutions de conteneurs aménagés : Bureaux, Ateliers, et Stations carburant mobiles.",
    details: "Nous concevons et fournissons des solutions modulaires sur mesure pour vos chantiers. De la simple base-vie au bureau d'étude complet, nos conteneurs sont robustes, isolés et rapidement déployables. Inclut des options de stations carburant mobiles sécurisées.",
    icon: <Container size={32} className="text-corporate-blue" />,
  },
  {
    id: 2,
    title: "Offshore Specialist",
    short: "Location et maintenance de conteneurs certifiés DNV 2.7-1 pour les environnements maritimes.",
    details: "Notre flotte de conteneurs offshore respecte la norme DNV 2.7-1, garantissant une sécurité maximale pour le transport de matériel. Nous assurons la location, la maintenance et la certification pour toutes vos opérations en mer.",
    icon: <Ship size={32} className="text-corporate-blue" />,
  },
  {
    id: 3,
    title: "Ingénierie & Travaux",
    short: "Soudure (ASME), sablage, génie civil et BTP. L'excellence technique pour vos projets industriels.",
    details: "Nos équipes qualifiées interviennent sur des projets de haute technicité. Nous maîtrisons la soudure haute pression (certifications ASME & autres), le traitement de surface (sablage/peinture ACQPA) et les travaux de génie civil complexes.",
    icon: <Wrench size={32} className="text-corporate-blue" />,
  },
    {
    id: 4,
    title: "Human Resources",
    short: "Gestion et placement de personnel qualifié : Techniciens, Ingénieurs, et main d'œuvre spécialisée.",
    details: "Nous trouvons pour vous les profils techniques les plus pointus. Notre réseau nous permet de vous proposer des techniciens, ingénieurs et opérateurs qualifiés pour des missions de courte ou longue durée, en assurant la gestion administrative complète.",
    icon: <Users size={32} className="text-corporate-blue" />,
  },
  {
    id: 5,
    title: "Mobilité & Logistique",
    short: "Location de véhicules industriels, transport de marchandises et logistique automobile complète.",
    details: "Optimisez vos flux logistiques avec notre service de location de véhicules (camions, grues, utilitaires) et notre expertise en transport de marchandises. Nous gérons l'ensemble de votre logistique automobile, du stockage à la livraison.",
    icon: <Truck size={32} className="text-corporate-blue" />,
  },
];

const ServiceCard = ({ service, onSelect }) => (
  <motion.div
    layoutId={`card-container-${service.id}`}
    onClick={() => onSelect(service)}
    className="bg-white rounded-xl shadow-sm border border-gray-200/80 p-8 flex flex-col group cursor-pointer"
    whileHover={{ scale: 1.03, shadow: "0px 10px 20px rgba(0, 0, 0, 0.05)" }}
  >
    <motion.div layoutId={`card-icon-${service.id}`} className="mb-6">{service.icon}</motion.div>
    <motion.h3 layoutId={`card-title-${service.id}`} className="text-xl font-bold text-oil-black mb-2">{service.title}</motion.h3>
    <motion.p layoutId={`card-short-${service.id}`} className="text-gray-600 flex-grow">{service.short}</motion.p>
    <div className="mt-6 font-semibold text-corporate-blue flex items-center gap-2 group-hover:gap-3 transition-all">
      En savoir plus <ArrowRight size={16} />
    </div>
  </motion.div>
);

const ExpandedServiceCard = ({ service, onDeselect }) => (
    <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onDeselect}
    >
        <motion.div
          layoutId={`card-container-${service.id}`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          className="relative bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl"
        >
            <motion.div layoutId={`card-icon-${service.id}`} className="mb-6">{service.icon}</motion.div>
            <motion.h3 layoutId={`card-title-${service.id}`} className="text-2xl font-bold text-oil-black mb-4">{service.title}</motion.h3>
            <motion.p layoutId={`card-short-${service.id}`} className="text-gray-500 mb-4">{service.short}</motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }} className="border-t pt-4">
                <p className="text-gray-700">{service.details}</p>
            </motion.div>
            <button onClick={onDeselect} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
                <X size={24} />
            </button>
        </motion.div>
    </motion.div>
);


const ServiceGrid = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="bg-steel-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-corporate-blue">Nos Métiers</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-oil-black sm:text-4xl">
            Des solutions complètes pour chaque défi
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une expertise multi-domaines pour assurer le succès de vos opérations.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} onSelect={setSelectedService} />
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedService && (
          <ExpandedServiceCard service={selectedService} onDeselect={() => setSelectedService(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceGrid;
