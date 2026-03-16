import { Helmet } from 'react-helmet-async';

const resolveBaseUrl = () => {
  const envUrl = import.meta.env.VITE_SITE_URL;
  if (envUrl && typeof envUrl === 'string') {
    return envUrl.replace(/\/$/, '');
  }

  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }

  return 'https://bbs-bouyedi-business-services.vercel.app';
};

const BASE_URL = resolveBaseUrl();
const DEFAULT_OG_IMAGE = `${BASE_URL}/logo-bbs.png`;

const pageMeta = {
  home: {
    title: "BOUYEDI BUSINESS SERVICES - Solutions Industrielles Au Gabon",
    description:
      "BOUYEDI BUSINESS SERVICES accompagne les acteurs pétroliers, gaziers et BTP au Gabon: conteneurs aménagés, maintenance industrielle, génie civil et support opérationnel.",
    canonical: BASE_URL,
  },
  contact: {
    title: 'Contact - BOUYEDI BUSINESS SERVICES',
    description:
      'Contactez BOUYEDI BUSINESS SERVICES à Port-Gentil pour vos projets industriels: logistique modulaire, maintenance, génie civil et assistance technique.',
    canonical: `${BASE_URL}/contact`,
  },
  galeries: {
    title: 'Galeries Projets - BOUYEDI BUSINESS SERVICES',
    description:
      'Découvrez les réalisations BOUYEDI BUSINESS SERVICES: projets terrain, aménagement de conteneurs, maintenance et génie civil sur sites industriels au Gabon.',
    canonical: `${BASE_URL}/galeries`,
  },
};

const SEO = ({ page = 'home' }) => {
  const current = pageMeta[page] || pageMeta.home;

  const keywords = [
    'Bouyedi Business Services',
    'BBS Gabon',
    'Port-Gentil',
    'logistique industrielle Gabon',
    'conteneurs aménagés Port-Gentil',
    'génie civil Gabon',
    'maintenance pétrolière Gabon',
    'soudure industrielle Gabon',
    'projets pétroliers Gabon',
    'BTP Gabon',
    'location conteneur Gabon',
    'aménagement bureaux conteneurs',
    'BOUYEDI Port-Gentil',
    'BBS Services Pétroliers',
  ].join(', ');

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BOUYEDI BUSINESS SERVICES',
    alternateName: 'BBS',
    url: BASE_URL,
    logo: `${BASE_URL}/logo-bbs.png`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: '+241077366328',
        areaServed: 'GA',
        availableLanguage: ['fr'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'BP 391, derriere la clinique mandji, a cote base militaire',
      addressLocality: 'Port-Gentil',
      addressCountry: 'GA',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'BOUYEDI BUSINESS SERVICES',
    image: `${BASE_URL}/logo-bbs.png`,
    url: current.canonical,
    description: current.description,
    areaServed: {
      '@type': 'Country',
      name: 'Gabon',
    },
    serviceType: ['Logistique modulaire', 'Genie civil', 'Maintenance industrielle', 'Support RH technique'],
  };

  return (
    <Helmet>
      <title>{current.title}</title>
      <meta name="description" content={current.description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="BOUYEDI BUSINESS SERVICES" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />

      <meta property="og:title" content={current.title} />
      <meta property="og:description" content={current.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={current.canonical} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:site_name" content="BOUYEDI BUSINESS SERVICES" />
      <meta property="og:locale" content="fr_GA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={current.title} />
      <meta name="twitter:description" content={current.description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      <link rel="canonical" href={current.canonical} />

      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
    </Helmet>
  );
};

export default SEO;
