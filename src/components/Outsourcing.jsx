import { useTranslation } from 'react-i18next';

export default function Outsourcing() {
  const { t } = useTranslation();

  return (
    <section
      id="outsourcing"
      className="border-t border-[var(--color-border)] px-4 py-20 sm:px-6"
      aria-labelledby="outsourcing-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="outsourcing-title" className="font-heading text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          {t('outsourcing.title')}
        </h2>
        <p className="mt-3 font-body text-lg text-[var(--color-accent-bright)]">
          {t('outsourcing.subtitle')}
        </p>
        <p className="mt-6 max-w-3xl font-body text-[var(--color-text-muted)]">
          {t('outsourcing.description')}
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center rounded-xl bg-[var(--color-accent-bright)] px-6 py-3 font-body text-sm font-semibold text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-bright)] focus:ring-offset-2 focus:ring-offset-[var(--color-surface)]"
          >
            {t('outsourcing.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
