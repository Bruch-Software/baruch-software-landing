import { useState, useEffect } from 'react';

function useLoadTime() {
  const [loadTime, setLoadTime] = useState(null);

  useEffect(() => {
    if (typeof performance !== 'undefined' && performance.timing) {
      const timing = performance.timing;
      const end = timing.loadEventEnd || timing.domContentLoadedEventEnd || Date.now();
      const start = timing.navigationStart;
      setLoadTime(Math.round(end - start));
    } else {
      setLoadTime(0);
    }
  }, []);

  return loadTime;
}

function speedPercent(ms) {
  if (ms <= 800) return 100;
  if (ms >= 2000) return 0;
  return Math.round(100 - ((ms - 800) / 1200) * 100);
}

export default function PerformanceWidget() {
  const loadTime = useLoadTime();
  const isFast = loadTime !== null && loadTime < 1500;
  const percent = loadTime !== null ? speedPercent(loadTime) : 0;

  if (loadTime === null) return null;

  return (
    <div
      className="card-terminal fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded border px-3 py-2.5 shadow-lg"
      role="status"
      aria-label={`Page loaded in ${loadTime} ms`}
    >
      <div className="flex flex-col gap-1" aria-hidden="true">
        <div className="h-1.5 w-12 overflow-hidden rounded-full bg-[var(--color-surface-elevated)]">
          <div
            className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="font-mono text-[10px] text-[var(--color-muted)]">Speed</span>
      </div>
      <div className="flex items-center gap-2">
        <div
          className={`h-2 w-2 rounded-full ${isFast ? 'bg-[var(--color-accent)] animate-pulse' : 'bg-amber-500'}`}
          aria-hidden="true"
        />
        <span className="font-mono text-xs font-medium tabular-nums text-[var(--color-text-muted)]">
          <span className="sr-only">Load time: </span>
          {loadTime} ms
        </span>
      </div>
      <svg
        className="h-3.5 w-3.5 shrink-0 text-[var(--color-accent)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
  );
}
