import { SquiggleDivider } from "./Doodles";

export function Footer() {
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-3xl px-6">
        <SquiggleDivider className="h-4 w-full text-line" />
      </div>
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-10 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} 유한비. 오늘 배운 것을 기록합니다.</p>
        <div className="flex gap-4">
          <a
            href="mailto:yhb1109@naver.com"
            className="underline-squiggle hover:text-ink-soft"
          >
            이메일
          </a>
        </div>
      </div>
    </footer>
  );
}
