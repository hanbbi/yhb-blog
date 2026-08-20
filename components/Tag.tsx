export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-accent-soft bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
      #{children}
    </span>
  );
}
