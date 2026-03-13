import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EMAIL = 'hello@baruchsoftware.com';

export default function Contact() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className="section-reveal border-t border-[var(--color-border)] px-4 py-20 sm:px-6"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="contact-title" className="font-mono text-2xl font-semibold tracking-tight text-[var(--color-accent)] sm:text-3xl">
          {t('contact.title')}
        </h2>
        <p className="mt-3 font-body text-lg text-[var(--color-text-muted)]">
          {t('contact.subtitle')}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="btn-primary inline-flex items-center rounded border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3 font-mono text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-black"
          >
            {t('contact.cta_primary')}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="btn-secondary inline-flex items-center rounded border px-6 py-3 font-mono text-sm font-medium text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-black"
          >
            {t('contact.cta_secondary')}
          </a>
        </div>
        <p className="mt-6 font-body text-sm text-[var(--color-muted)]">
          <a href={`mailto:${EMAIL}`} className="nav-link text-[var(--color-text-muted)] underline hover:text-[var(--color-accent)]">
            {t('contact.email')}: {EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
