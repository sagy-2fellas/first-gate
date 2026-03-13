import { useEffect } from 'react';

export default function SEOMeta({ title, description, keywords, ogImage, ogUrl, canonical, twitterImage, geoRegion, geoPlacename, geoPosition, schemaMarkup }) {
  useEffect(() => {
    // Set document title
    document.title = title || 'First Gate Enterprises SA - Integrated Design & Construction';

    // Remove existing meta tags that we'll update
    const removeMetaTags = ['description', 'keywords', 'og:title', 'og:description', 'og:image', 'og:url', 'og:type', 'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image', 'robots', 'geo.region', 'geo.placename', 'geo.position', 'ICBM', 'canonical'];
    removeMetaTags.forEach(name => {
      const selector = name === 'canonical' ? `link[rel="canonical"]` : `meta[name="${name}"], meta[property="${name}"]`;
      document.querySelectorAll(selector).forEach(el => el.remove());
    });

    // Remove existing schema markup
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());

    // Add meta description
    if (description) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add keywords
    if (keywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Add OG tags
    if (ogImage) {
      const meta = document.createElement('meta');
      meta.property = 'og:image';
      meta.content = ogImage;
      document.head.appendChild(meta);
    }

    if (ogUrl) {
      const meta = document.createElement('meta');
      meta.property = 'og:url';
      meta.content = ogUrl;
      document.head.appendChild(meta);
    }

    // Add canonical link
    if (canonical) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonical;
      document.head.appendChild(link);
    }

    // Set default OG title and description
    const ogTitleMeta = document.createElement('meta');
    ogTitleMeta.property = 'og:title';
    ogTitleMeta.content = title || 'First Gate Enterprises SA';
    document.head.appendChild(ogTitleMeta);

    const ogDescMeta = document.createElement('meta');
    ogDescMeta.property = 'og:description';
    ogDescMeta.content = description || 'Integrated design and construction solutions for commercial and residential projects.';
    document.head.appendChild(ogDescMeta);

    // Add OG type
    const ogTypeMeta = document.createElement('meta');
    ogTypeMeta.property = 'og:type';
    ogTypeMeta.content = 'website';
    document.head.appendChild(ogTypeMeta);

    // Add Twitter tags
    const twitterCardMeta = document.createElement('meta');
    twitterCardMeta.name = 'twitter:card';
    twitterCardMeta.content = 'summary_large_image';
    document.head.appendChild(twitterCardMeta);

    const twitterTitleMeta = document.createElement('meta');
    twitterTitleMeta.name = 'twitter:title';
    twitterTitleMeta.content = title || 'First Gate Enterprises SA';
    document.head.appendChild(twitterTitleMeta);

    const twitterDescMeta = document.createElement('meta');
    twitterDescMeta.name = 'twitter:description';
    twitterDescMeta.content = description || 'Integrated design and construction solutions.';
    document.head.appendChild(twitterDescMeta);

    if (twitterImage) {
      const twitterImgMeta = document.createElement('meta');
      twitterImgMeta.name = 'twitter:image';
      twitterImgMeta.content = twitterImage;
      document.head.appendChild(twitterImgMeta);
    }

    // Add robots meta
    const robotsMeta = document.createElement('meta');
    robotsMeta.name = 'robots';
    robotsMeta.content = 'index, follow';
    document.head.appendChild(robotsMeta);

    // Add geo meta tags
    if (geoRegion) {
      const geoRegionMeta = document.createElement('meta');
      geoRegionMeta.name = 'geo.region';
      geoRegionMeta.content = geoRegion;
      document.head.appendChild(geoRegionMeta);
    }

    if (geoPlacename) {
      const geoPlacenameMeta = document.createElement('meta');
      geoPlacenameMeta.name = 'geo.placename';
      geoPlacenameMeta.content = geoPlacename;
      document.head.appendChild(geoPlacenameMeta);
    }

    if (geoPosition) {
      const geoPositionMeta = document.createElement('meta');
      geoPositionMeta.name = 'geo.position';
      geoPositionMeta.content = geoPosition;
      document.head.appendChild(geoPositionMeta);

      const icbmMeta = document.createElement('meta');
      icbmMeta.name = 'ICBM';
      icbmMeta.content = geoPosition.replace(';', ', ');
      document.head.appendChild(icbmMeta);
    }

    // Add schema markup
    if (schemaMarkup) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemaMarkup);
      document.head.appendChild(script);
    }

  }, [title, description, keywords, ogImage, ogUrl, canonical, twitterImage, geoRegion, geoPlacename, geoPosition, schemaMarkup]);

  return null;
}