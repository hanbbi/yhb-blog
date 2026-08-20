import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentPropsWithoutRef } from "react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

type PreProps = ComponentPropsWithoutRef<"pre"> & { "data-language"?: string };

function CodePre(props: PreProps) {
  const language = typeof props["data-language"] === "string" ? props["data-language"] : undefined;

  return (
    <div className="codeblock-figure not-prose">
      <div className="codeblock-head">
        <span className="codeblock-dot" />
        <span className="codeblock-dot" />
        <span className="codeblock-dot" />
        {language ? <span className="ml-auto">{language}</span> : null}
      </div>
      <pre {...props} />
    </div>
  );
}

const mdxComponents = {
  pre: CodePre,
};

export function Mdx({ source }: { source: string }) {
  return (
    <div className="prose-warm">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: "rose-pine",
                  keepBackground: false,
                },
              ],
              rehypeSlug,
              [
                rehypeAutolinkHeadings,
                {
                  behavior: "append",
                  properties: { className: ["heading-anchor"], ariaLabel: "이 섹션으로 링크" },
                  content: [{ type: "text", value: " #" }],
                },
              ],
            ],
          },
        }}
      />
    </div>
  );
}
