import { useTranslation } from 'react-i18next';

const icons = {
  performance: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  aiNative: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  architecture: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
};

const bullets = ['performance', 'aiNative', 'architecture'];

export default function WhyUs() {
  const { t } = useTranslation();

  return (
    <section
      id="why-us"
      className="border-t border-[var(--color-border)] px-4 py-20 sm:px-6"
      aria-labelledby="why-us-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="why-us-title" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t('whyUs.title')}
        </h2>
        <ul className="mt-12 space-y-8 sm:grid sm:grid-cols-3 sm:gap-8 sm:space-y-0" role="list">
          {bullets.map((key) => (
            <li
              key={key}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent-dim)] text-[var(--color-accent)]">
                {icons[key]}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {t(`whyUs.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                {t(`whyUs.${key}.description`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
