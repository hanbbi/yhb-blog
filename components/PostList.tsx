"use client";

import { useMemo, useState } from "react";
import type { PostMeta } from "@/lib/posts";
import { PostCard } from "./PostCard";

export function PostList({ posts, tags }: { posts: PostMeta[]; tags: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(
    () => (active ? posts.filter((post) => post.tags.includes(active)) : posts),
    [active, posts]
  );

  return (
    <div>
      {tags.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActive(null)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              active === null
                ? "border-accent bg-accent text-accent-ink"
                : "border-line bg-surface text-ink-soft hover:border-accent hover:text-accent"
            }`}
          >
            전체
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(tag)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                active === tag
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-line bg-surface text-ink-soft hover:border-accent hover:text-accent"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-line px-6 py-10 text-center text-sm text-ink-faint">
          아직 이 태그로 쓴 글이 없어요.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((post, i) => (
            <PostCard
              key={post.slug}
              post={post}
              rotate={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
