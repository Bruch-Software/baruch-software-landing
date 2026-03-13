import { useTranslation } from 'react-i18next';

const icons = {
  cleanCode: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  aws: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  dotnet: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
};

const keys = ['cleanCode', 'aws', 'dotnet'];

export default function BaruchStandard() {
  const { t } = useTranslation();

  return (
    <section
      id="standard"
      className="border-t border-[var(--color-border)] px-4 py-20 sm:px-6"
      aria-labelledby="standard-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="standard-title" className="font-heading text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          {t('standard.title')}
        </h2>
        <p className="mt-3 font-body text-lg text-[var(--color-text-muted)]">
          {t('standard.subtitle')}
        </p>
        <ul className="mt-12 grid gap-8 sm:grid-cols-3" role="list">
          {keys.map((key) => (
            <li key={key} className="glass-card rounded-2xl border-[var(--color-border)] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent-dim)] text-[var(--color-accent-bright)]">
                {icons[key]}
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-[var(--color-text)]">
                {t(`standard.${key}.title`)}
              </h3>
              <p className="mt-2 font-body text-sm text-[var(--color-text-muted)]">
                {t(`standard.${key}.description`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
