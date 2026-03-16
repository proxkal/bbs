import { motion } from 'framer-motion';

const allClients = [
  { name: 'TotalEnergies', src: '/logo%20Total.jpeg' },
  { name: 'Assala', src: '/logo-assala.png' },
  { name: 'SLB', src: '/SLB_Logo.png' },
  { name: 'Perenco', src: '/perenco.png' },
  { name: 'Maurel & Prom', src: '/maurel&prom.jpg' },
  { name: 'GOC', src: '/Logo_goc.png' },
  { name: 'Dixstone', src: '/dixstone-logo.png' },
];

const ClientLogos = () => {
  return (
    <section id="clients" className="bg-white py-12 md:py-24 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic">
            Nos Partenaires <span className="text-bbs-green">Stratégiques</span>
          </h2>
          <div className="w-16 md:w-24 h-1 md:h-1.5 bg-bbs-green mx-auto mt-4 md:mt-6"></div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-6"
          >
            {allClients.map((client) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center p-3 md:p-8 bg-slate-50 rounded-lg md:rounded-xl border border-slate-100 hover:border-bbs-green hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                {client.src ? (
                  <img
                    src={client.src}
                    alt={client.name}
                    className="h-8 sm:h-12 md:h-20 w-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-[10px] md:text-lg font-black text-slate-300 uppercase italic text-center">
                    {client.name}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
