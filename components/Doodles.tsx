export function DrawerMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      aria-hidden
    >
      <rect x="5" y="6" width="30" height="28" rx="6" stroke="currentColor" strokeWidth="2.2" />
      <line x1="5" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="2.2" />
      <line x1="16" y1="13" x2="24" y2="13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="16" y1="27" x2="24" y2="27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function SquiggleDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 16"
      className={className}
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0 8c8-7 16 7 24 0s16-7 24 0 16 7 24 0 16-7 24 0 16 7 24 0 16-7 24 0 16 7 24 0 16-7 24 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CoffeeCup({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      <path
        d="M9 15h18v10a6 6 0 0 1-6 6h-6a6 6 0 0 1-6-6V15Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M27 18h2.5a4 4 0 0 1 0 8H27" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M14 10c0-1.5 2-1.5 2-3M20 10c0-1.5 2-1.5 2-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SparkStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2c.6 3.9 1.9 6.5 4.5 7.5-2.6 1-3.9 3.6-4.5 7.5-.6-3.9-1.9-6.5-4.5-7.5C10.1 8.5 11.4 5.9 12 2Z" />
    </svg>
  );
}
