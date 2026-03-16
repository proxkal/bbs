import { ShieldCheck, Wrench, Globe, Users } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={40} className="text-corporate-blue" />,
    title: 'Sécurité & Conformité',
    description: 'Nous opérons selon les normes les plus strictes (HSE, ISO, ASME) pour garantir la sécurité de vos opérations.',
  },
  {
    icon: <Wrench size={40} className="text-corporate-blue" />,
    title: 'Expertise Technique',
    description: 'Une ingénierie de pointe et des techniciens certifiés pour des projets complexes, de la soudure haute pression au génie civil.',
  },
  {
    icon: <Globe size={40} className="text-corporate-blue" />,
    title: 'Solutions Globales',
    description: 'De la logistique modulaire offshore à la gestion de personnel, nous offrons une gamme de services intégrés.',
  },
  {
    icon: <Users size={40} className="text-corporate-blue" />,
    title: 'Partenariat Humain',
    description: 'Nous construisons des relations durables basées sur la confiance, la réactivité et une compréhension profonde de vos besoins.',
  },
];

const Features = () => {
  return (
    <section className="bg-steel-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-corporate-blue">Notre Engagement</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-oil-black sm:text-4xl">
            La performance au service de vos ambitions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quatre piliers qui définissent notre approche pour chaque projet que nous entreprenons.
          </p>
        </div>
        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-blue-100 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold leading-7 text-oil-black">{feature.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
