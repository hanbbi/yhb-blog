import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDateKo } from "@/lib/date";
import { Tag } from "./Tag";

export function PostCard({ post, rotate }: { post: PostMeta; rotate: "left" | "right" | "none" }) {
  const rotateClass =
    rotate === "left" ? "hover:-rotate-1" : rotate === "right" ? "hover:rotate-1" : "";

  return (
    <Link
      href={`/posts/${post.slug}`}
      className={`paper-card block rounded-2xl px-6 py-5 transition-transform duration-200 ${rotateClass}`}
    >
      <div className="flex items-center gap-2 text-xs text-ink-faint">
        <time dateTime={post.date}>{formatDateKo(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingMinutes}분 분량</span>
      </div>
      <h2 className="mt-2 font-serif text-xl font-bold text-ink">{post.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{post.summary}</p>
      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </Link>
  );
}
