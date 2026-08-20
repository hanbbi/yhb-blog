import type { Metadata } from "next";
import { DrawerMark, SquiggleDivider } from "@/components/Doodles";

export const metadata: Metadata = {
  title: "소개",
  description: "4년차 Java/Spring 풀스택 개발자 유한비입니다.",
};

const TIMELINE = [
  {
    period: "2023.04 ~ 재직중",
    title: "파이어독스 · 플랫폼 개발부",
    desc: "가스통합관리 플랫폼의 대용량 검침 데이터 처리·집계 구조를 설계하고, 쿼리 성능과 보안을 책임지고 있습니다.",
  },
  {
    period: "2023.06 ~ 2023.12",
    title: "IoT 아파트 검침 모니터링 시스템",
    desc: "가스업체 전용이던 플랫폼을 아파트 시장으로 확장한 신규 프로젝트를 풀스택으로 구축했습니다.",
  },
  {
    period: "2024.06 ~ 2024.07",
    title: "iOS 앱 첫 출시",
    desc: "사내에 iOS 개발자가 없어 Swift를 독학해서 회사 최초의 iOS 앱을 출시했습니다.",
  },
  {
    period: "2026.01 ~ 2026.03",
    title: "LPG AI 배송예측 프로토타입",
    desc: "검침 데이터를 학습시켜 충전일을 예측하는 모델을 만들고, React 대시보드로 시각화했습니다.",
  },
];

const SKILLS = [
  "Java",
  "Spring Boot",
  "MyBatis",
  "MariaDB",
  "RestAPI",
  "JSP",
  "JavaScript",
  "jQuery",
  "Swift",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <div className="flex items-center gap-3">
        <DrawerMark className="h-8 w-8 text-accent" />
        <h1 className="font-serif text-2xl font-bold text-ink">소개</h1>
      </div>

      <div className="prose-warm mt-8">
        <p>
          안녕하세요, 자바 풀스택 개발자 <strong>유한비</strong>입니다. 하루 대부분을 수천만 행
          규모의 IoT 검침 데이터와 씨름하며 보내고 있어요. 느린 쿼리를 실행계획부터
          다시 뜯어보고, 매번 원본 테이블을 긁던 구조를 요약 테이블로 바꾸는 식으로 &quot;왜
          느린지&quot;를 끝까지 따라가는 걸 좋아합니다.
        </p>
        <p>
          이 사이트는 velog 대신 직접 만든 공간이에요. 리뷰받은 코드, 스스로 고쳐본 코드,
          그 과정에서 배운 것들을 정리해서 넣어두려고 합니다. 화려한 기능보다{" "}
          <strong>데이터가 정확하고 빠른 것</strong>이 좋은 서비스를 만든다고 생각합니다.
        </p>
      </div>

      <SquiggleDivider className="my-10 h-4 w-full text-line" />

      <h2 className="font-serif text-lg font-bold text-ink">걸어온 길</h2>
      <ol className="mt-6 space-y-6 border-l border-dashed border-line pl-6">
        {TIMELINE.map((item) => (
          <li key={item.title} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-xs text-ink-faint">{item.period}</p>
            <p className="mt-1 font-serif text-base font-bold text-ink">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
          </li>
        ))}
      </ol>

      <SquiggleDivider className="my-10 h-4 w-full text-line" />

      <h2 className="font-serif text-lg font-bold text-ink">주로 쓰는 도구</h2>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-ink-soft"
          >
            {skill}
          </span>
        ))}
      </div>

      <SquiggleDivider className="my-10 h-4 w-full text-line" />

      <h2 className="font-serif text-lg font-bold text-ink">연락</h2>
      <p className="mt-4 text-sm text-ink-soft">
        <a href="mailto:yhb1109@naver.com" className="underline-squiggle text-accent">
          yhb1109@naver.com
        </a>{" "}
        으로 편하게 연락 주세요.
      </p>
    </div>
  );
}
