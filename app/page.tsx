import { getAllPosts, getAllTags } from "@/lib/posts";
import { PostList } from "@/components/PostList";
import { CoffeeCup, SparkStar } from "@/components/Doodles";

const SKILLS = ["Java", "Spring Boot", "MyBatis", "MariaDB", "JSP", "Swift"];

export default function Home() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <section className="relative">
        <SparkStar className="float-soft absolute -left-2 -top-6 h-4 w-4 text-mark" />
        <div className="flex items-start gap-5">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-line bg-accent-soft font-serif text-2xl font-bold text-accent">
            한비
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
              대용량 데이터를 다루며
              <br className="hidden sm:block" /> 배운 것들을 끄적이는 공간
            </h1>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-ink-soft">
              수천만 행짜리 IoT 검침 데이터를 매일 들여다보는 풀스택 개발자입니다.<br />
              쿼리를 고치고, 구조를 다시 짜고, 코드 리뷰를 받으며 배운 것들을 기록합니다.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs text-ink-soft"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="my-10 border-t border-dashed border-line" />

      <section>
        <h2 className="mb-5 font-serif text-lg font-bold text-ink">최근 글</h2>
        <PostList posts={posts} tags={tags} />
      </section>
    </div>
  );
}
