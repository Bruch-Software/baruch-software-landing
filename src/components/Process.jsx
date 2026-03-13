import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  { key: 'step1', num: '01' },
  { key: 'step2', num: '02' },
  { key: 'step3', num: '03' },
];

export default function Process() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section
      id="process"
      ref={ref}
      className="section-reveal border-t border-[var(--color-border)] px-4 py-20 sm:px-6"
      aria-labelledby="process-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="process-title" className="font-mono text-2xl font-semibold tracking-tight text-[var(--color-accent)] sm:text-3xl">
          {t('process.title')}
        </h2>
        <p className="mt-3 font-body text-lg text-[var(--color-text-muted)]">
          {t('process.subtitle')}
        </p>
        <ol className="mt-12 space-y-6 sm:space-y-8" role="list">
          {steps.map(({ key, num }) => (
            <li key={key} className="flex gap-6 rounded-lg border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-border-hover)] sm:gap-8">
              <span
                className="font-mono text-2xl font-semibold tabular-nums text-[var(--color-accent)]/80 sm:text-3xl"
                aria-hidden="true"
              >
                {num}
              </span>
              <div className="flex-1">
                <h3 className="font-mono text-lg font-medium text-[var(--color-text)] sm:text-xl">
                  {t(`process.${key}.title`)}
                </h3>
                <p className="mt-2 font-body text-[var(--color-text-muted)]">
                  {t(`process.${key}.description`)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
