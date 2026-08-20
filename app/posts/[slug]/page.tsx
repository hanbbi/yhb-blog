import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/posts";
import { formatDateKo } from "@/lib/date";
import { Mdx } from "@/components/Mdx";
import { Tag } from "@/components/Tag";
import { SquiggleDivider } from "@/components/Doodles";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/posts/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function PostPage(props: PageProps<"/posts/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prev = allPosts[currentIndex + 1];
  const next = allPosts[currentIndex - 1];

  return (
    <article className="mx-auto max-w-3xl px-6 py-14">
      <Link href="/" className="underline-squiggle text-sm text-ink-soft hover:text-ink">
        ← 서랍으로 돌아가기
      </Link>

      <header className="mt-6">
        <div className="flex items-center gap-2 text-xs text-ink-faint">
          <time dateTime={post.date}>{formatDateKo(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes}분 분량</span>
        </div>
        <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-ink">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </header>

      <SquiggleDivider className="mt-8 h-4 w-full text-line" />

      <div className="mt-8">
        <Mdx source={post.content} />
      </div>

      {(prev || next) && (
        <nav className="mt-16 grid gap-3 border-t border-dashed border-line pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/posts/${prev.slug}`}
              className="paper-card rounded-2xl px-4 py-3 text-sm"
            >
              <span className="text-ink-faint">← 이전 글</span>
              <p className="mt-1 font-medium text-ink">{prev.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/posts/${next.slug}`}
              className="paper-card rounded-2xl px-4 py-3 text-right text-sm sm:col-start-2"
            >
              <span className="text-ink-faint">다음 글 →</span>
              <p className="mt-1 font-medium text-ink">{next.title}</p>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  );
}
