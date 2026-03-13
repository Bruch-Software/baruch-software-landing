import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-depth)] px-4 py-8 sm:px-6" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-body text-sm text-[var(--color-muted)]">
          {t('footer.tagline')}
        </p>
        <p className="font-body text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} Baruch Software. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
