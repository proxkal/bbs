import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "La réactivité et l'expertise de BBS sur nos sites pétroliers ont été déterminantes. Leur gestion des conteneurs DNV 2.7-1 est irréprochable.",
    author: 'Jean-Pierre M.',
    title: 'Superviseur Logistique, Secteur Pétrolier',
  },
  {
    quote: "Leur équipe de soudeurs certifiés a réalisé un travail exceptionnel sur le banc de comptage GOC. Une fiabilité à toute épreuve.",
    author: 'Michel O.',
    title: 'Ingénieur Maintenance Industrielle',
  },
  {
    quote: "Grâce à leurs solutions de conteneurs aménagés, nous avons pu déployer des bureaux de chantier confortables en un temps record à Port-Gentil.",
    author: 'Sarah B.',
    title: 'Chef de Chantier BTP',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-slate-900 py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
            <h2 className="text-[#007A7A] font-bold tracking-widest uppercase text-sm mb-4">Témoignages</h2>
            <p className="text-4xl font-black text-white tracking-tighter uppercase italic">
                Ils nous font <span className="text-[#007A7A]">confiance</span>
            </p>
            <div className="w-24 h-1.5 bg-[#007A7A] mx-auto mt-6"></div>
        </div>
        
        <div className="relative h-80 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center text-center px-4"
            >
              <Quote className="h-16 w-16 text-[#007A7A]/20 mb-8" />
              <p className="text-2xl md:text-3xl font-bold text-slate-200 max-w-4xl italic leading-tight tracking-tight">
                "{testimonials[index].quote}"
              </p>
              <footer className="mt-10">
                <p className="font-black text-white uppercase tracking-tighter text-lg">{testimonials[index].author}</p>
                <p className="text-[#007A7A] font-bold uppercase text-[10px] tracking-widest">{testimonials[index].title}</p>
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-6 mt-12">
            <button
                onClick={prevTestimonial}
                className="p-4 rounded-full border border-slate-700 text-[#007A7A] hover:bg-slate-800 transition-all hover:border-[#007A7A]"
                aria-label="Témoignage précédent"
            >
                <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 w-2 rounded-full transition-all ${i === index ? 'bg-[#007A7A] w-6' : 'bg-slate-700'}`}
                />
              ))}
            </div>
            <button
                onClick={nextTestimonial}
                className="p-4 rounded-full border border-slate-700 text-[#007A7A] hover:bg-slate-800 transition-all hover:border-[#007A7A]"
                aria-label="Témoignage suivant"
            >
                <ArrowRight size={20} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
