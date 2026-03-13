import { useTranslation } from 'react-i18next';

const pointKeys = ['velocity', 'security', 'quality'];

export default function AIIntegration() {
  const { t } = useTranslation();

  return (
    <section
      id="ai"
      className="border-t border-[var(--color-border)] px-4 py-20 sm:px-6"
      aria-labelledby="ai-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="ai-title" className="font-heading text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
          {t('ai.title')}
        </h2>
        <p className="mt-3 font-body text-lg text-[var(--color-accent-bright)]">
          {t('ai.subtitle')}
        </p>
        <p className="mt-6 max-w-3xl font-body text-[var(--color-text-muted)]">
          {t('ai.description')}
        </p>
        <ul className="mt-10 space-y-4" role="list">
          {pointKeys.map((key) => (
            <li key={key} className="flex items-start gap-3">
              <span className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent-bright)]" aria-hidden="true" />
              <span className="font-body text-[var(--color-text-muted)]">
                {t(`ai.points.${key}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
