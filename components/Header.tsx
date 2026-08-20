import Link from "next/link";
import { DrawerMark } from "./Doodles";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-line/70">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="group flex items-center gap-2.5">
          <DrawerMark className="h-7 w-7 text-accent transition-transform group-hover:-rotate-6" />
          <span className="font-serif text-lg font-bold tracking-tight text-ink">
            한비의 코드 서랍
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-ink-soft">
          <Link href="/" className="underline-squiggle hover:text-ink">
            글 목록
          </Link>
          <Link href="/about" className="underline-squiggle hover:text-ink">
            소개
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
