import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Closing() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="section-reveal border-t border-[var(--color-border)] px-4 py-20 sm:px-6"
      aria-labelledby="closing-title"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="closing-title" className="font-mono text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
          {t('closing.title')}
        </h2>
        <p className="mt-4 font-body text-lg text-[var(--color-text-muted)]">
          {t('closing.text')}
        </p>
        <a
          href="#contact"
          className="btn-primary mt-8 inline-flex items-center rounded border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3 font-mono text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-black"
        >
          {t('closing.cta')}
        </a>
      </div>
    </section>
  );
}
