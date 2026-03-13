import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { key: 'services', href: '#services' },
    { key: 'process', href: '#process' },
    { key: 'contact', href: '#contact' },
  ];

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(next);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-black/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6" aria-label="Main navigation">
        <a href="#" className="font-logo text-lg tracking-tight text-[var(--color-text)] outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-black rounded">
          Baruch Software
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  className="nav-link font-mono text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] rounded px-2 py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`nav.${key}`)}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleLang}
            className="btn-secondary rounded px-3 py-1.5 font-mono text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
            aria-label={i18n.language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}
          >
            {i18n.language === 'en' ? 'ES' : 'EN'}
          </button>

          <button
            type="button"
            className="nav-link md:hidden rounded p-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-[var(--color-border)] bg-black/98 backdrop-blur-sm px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  className="nav-link block font-mono text-[var(--color-text-muted)] hover:text-[var(--color-accent)] py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`nav.${key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
