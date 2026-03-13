import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

const icons = {
  cloud: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  custom: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  ai: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

const keys = ['cloud', 'custom', 'ai'];

export default function Services() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section
      id="services"
      ref={ref}
      className="section-reveal border-t border-[var(--color-border)] px-4 py-20 sm:px-6"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="services-title" className="font-mono text-2xl font-semibold tracking-tight text-[var(--color-accent)] sm:text-3xl">
          {t('services.title')}
        </h2>
        <p className="mt-3 font-body text-lg text-[var(--color-text-muted)]">
          {t('services.subtitle')}
        </p>
        <ul className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-3" role="list">
          {keys.map((key) => (
            <li key={key} className="card-terminal rounded-lg p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded border border-[var(--color-border)] text-[var(--color-accent)]">
                {icons[key]}
              </div>
              <h3 className="mt-4 font-mono text-lg font-medium text-[var(--color-text)]">
                {t(`services.${key}.title`)}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-[var(--color-text-muted)]">
                {t(`services.${key}.description`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
