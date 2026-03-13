import SEOMeta from '@/components/SEOMeta';

const defaultSEO = {
  title: 'Commercial Office Fit-Out & Construction Cape Town | First Gate Enterprises SA',
  description: 'Cape Town\'s integrated design, build and fit-out company. Turnkey commercial office construction, interior design and project management — one team, full accountability. Serving developers, REITs and corporate tenants.',
  keywords: 'design and construction, commercial property, integrated design, turnkey projects, Cape Town, residential fit-out, architectural design, office design, commercial fit-out',
  ogImage: 'https://firstgate.co.za/og-image.jpg',
  ogUrl: 'https://firstgate.co.za/',
  twitterImage: 'https://firstgate.co.za/og-image.jpg',
  geoRegion: 'ZA-WC',
  geoPlacename: 'Cape Town',
  geoPosition: '-33.9249;18.4241',
  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "First Gate Enterprises SA",
    "url": "https://firstgate.co.za",
    "logo": "https://firstgate.co.za/logo.png",
    "image": "https://firstgate.co.za/og-image.jpg",
    "description": "Integrated design, build and fit-out company delivering turnkey commercial and residential construction across Cape Town and South Africa.",
    "telephone": "+27214931791",
  "email": "sales@firstgate.co.za",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "15th Floor, The Towers, 2 Hertzog Boulevard",
      "addressLocality": "Cape Town",
      "addressRegion": "Western Cape",
      "postalCode": "8000",
      "addressCountry": "ZA"
    },
    "areaServed": ["Cape Town", "Western Cape", "South Africa"],
    "serviceType": [
      "Commercial Office Fit-Out",
      "Turnkey Construction",
      "Interior Design",
      "Space Planning",
      "Project Management",
      "Architectural Design"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/first-gate-enterprises-sa-pty-ltd/posts/?feedView=all"
    ]
  }
};

export default function Layout({ children, currentPageName, pageTLDR }) {
  // Page-specific SEO overrides can go here
  const pageSEO = {
    Home: defaultSEO,
  };

  const currentSEO = pageSEO[currentPageName] || defaultSEO;

  return (
    <>
      <SEOMeta
        title={currentSEO.title}
        description={currentSEO.description}
        keywords={currentSEO.keywords}
        ogImage={currentSEO.ogImage}
        ogUrl={currentSEO.ogUrl}
        twitterImage={currentSEO.twitterImage}
        geoRegion={currentSEO.geoRegion}
        geoPlacename={currentSEO.geoPlacename}
        geoPosition={currentSEO.geoPosition}
        schemaMarkup={currentSEO.schemaMarkup}
        canonical="https://firstgate.co.za"
      />
      {pageTLDR && (
        <div className="sr-only" aria-hidden="true">
          <p>{pageTLDR}</p>
        </div>
      )}
      {children}
    </>
  );
}