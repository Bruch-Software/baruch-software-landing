import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const defaultMeta = {
  title: 'Baruch Software | Engineering Excellence. No Boundaries.',
  keywords: 'Baruch Software, Cloud-Agnostic Solutions, High-Performance Backend, Modern Stack Architecture, AI-Native Systems, Intelligence Integration, Boutique Software Factory, High-End IT Outsourcing',
  ogImage: '/og-image.png',
  canonical: 'https://baruchsoftware.com/',
};

export default function SEO({ title, description, keywords, lang = 'en' }) {
  const { t } = useTranslation();
  const metaTitle = title || defaultMeta.title;
  const metaDescription = description || t('meta.description');
  const metaKeywords = keywords || defaultMeta.keywords;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={defaultMeta.ogImage} />
      <meta property="og:url" content={defaultMeta.canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <link rel="canonical" href={defaultMeta.canonical} />
    </Helmet>
  );
}
