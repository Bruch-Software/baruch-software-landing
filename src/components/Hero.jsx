import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function useTypingEffect(fullText, speed = 80, enabled = true) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!enabled || !fullText) {
      queueMicrotask(() => {
        setDisplay(fullText || '');
        setDone(true);
      });
      return;
    }
    queueMicrotask(() => {
      setDisplay('');
      setDone(false);
    });
    let i = 0;
    const id = setInterval(() => {
      if (i < fullText.length) {
        setDisplay(fullText.slice(0, i + 1));
        i += 1;
      } else {
        setDone(true);
        clearInterval(id);
      }
    }, speed);
    return () => clearInterval(id);
  }, [fullText, speed, enabled]);

  return { display, done };
}

export default function Hero() {
  const { t } = useTranslation();
  const title = t('hero.title');
  const { display, done } = useTypingEffect(title, 70, true);

  return (
    <section
      className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 pt-24 pb-16 sm:px-6"
      aria-labelledby="hero-title"
    >
      <p
        id="hero-badge"
        className="font-mono mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]"
      >
        {t('hero.badge')}
      </p>
      <h1
        id="hero-title"
        className={`font-mono max-w-4xl text-center text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-4xl md:text-5xl lg:text-6xl ${!done ? 'typing-cursor' : ''}`}
        aria-live="polite"
      >
        {display}
      </h1>
      <p className="mt-6 max-w-2xl text-center font-body text-base text-[var(--color-text-muted)] sm:text-lg">
        {t('hero.subtitle')}
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          className="btn-primary inline-flex items-center rounded border border-[var(--color-accent)] bg-[var(--color-accent)] px-6 py-3 font-mono text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-black"
        >
          {t('hero.cta_primary')}
        </a>
        <a
          href="#services"
          className="btn-secondary inline-flex items-center rounded border px-6 py-3 font-mono text-sm font-medium text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-black"
        >
          {t('hero.cta_secondary')}
        </a>
      </div>
    </section>
  );
}
