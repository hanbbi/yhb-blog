"use client";

function toggle() {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  window.localStorage.setItem("theme", next);
}

export function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="테마 전환"
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-surface text-ink-soft transition-transform hover:-rotate-6 hover:text-accent"
    >
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="theme-icon-dark">
        <path
          d="M12 3v2M12 19v2M5 5l1.4 1.4M17.6 17.6L19 19M3 12h2M19 12h2M5 19l1.4-1.4M17.6 6.4L19 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="theme-icon-light">
        <path
          d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
