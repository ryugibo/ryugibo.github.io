---
title: 'Astro와 daisyUI로 첫 기술 블로그 시작하기'
description: 'Astro, Tailwind CSS v4, daisyUI v5, 그리고 GitHub Pages로 장문 기술 아티클에 최적화된 개인 블로그를 세팅한 과정을 정리합니다.'
pubDate: 2026-11-19
category: 'Engineering'
tags: ['astro', 'daisyui', 'blog']
---

안녕하세요! **Astro + daisyUI + GitHub Pages** 조합으로 개인 기술 블로그를 시작했습니다.
긴 기술 글을 편하게 읽고 쓸 수 있도록 **Unreal Engine Tech Blog** 스타일의 에디토리얼 레이아웃과 딥 차콜 다크/라이트 테마를 적용했습니다.

## 기술 스택 구성

정적 블로그의 빠른 로딩 속도와 깔끔한 유지보수를 목표로 최소한의 도구를 조합했습니다.

| 영역 | 선택 | 이유 |
| --- | --- | --- |
| 프레임워크 | **Astro** | 정적 사이트 최적화 및 Content Layer API |
| 스타일링 | **Tailwind CSS v4 + daisyUI v5** | 순수 CSS 기반 테마 시스템과 간결한 컴포넌트 |
| 본문 스타일 | **@tailwindcss/typography** | Markdown/MDX 장문 가독성 최적화 |
| 배포 | **GitHub Pages + Actions** | `main` 브랜치 푸시 시 자동 빌드 및 배포 |

### 테마 시스템

기본 테마는 운영체제의 시스템 설정(`prefers-color-scheme`)을 따르며, 상단 네비게이션 바의 아이콘으로 언제든 라이트/다크 모드를 전환할 수 있습니다.

> 다크 모드에서는 순수 블랙(`#000000`) 대신 딥 차콜(`#101014`) 배경과 일렉트릭 블루(`#26bbff`) 포인트를 사용해 장시간 읽어도 눈의 피로를 줄였습니다.

## 새 글 작성 방법

`src/content/posts/` 디렉터리에 `.md` 또는 `.mdx` 파일을 추가하면 자동으로 글 목록, 태그 페이지, RSS 피드, 사이트맵에 반영됩니다.

```markdown
---
title: '새 기술 아티클 제목'
description: '글의 핵심 요약 설명'
pubDate: 2026-11-19
category: 'Deep Dive'
tags: ['graphics', 'rendering']
heroImage: '/images/cover.webp'
heroAlt: '커버 이미지 설명'
---

## 첫 번째 섹션

본문 내용을 작성하면 우측 목차(TOC)가 자동으로 생성됩니다.
```

### 코드 블록과 목차

- 모든 코드 블록은 다크 신택스 하이라이팅과 우상단 **원클릭 복사 버튼**을 지원합니다.
- `##`, `###` 헤딩을 작성하면 데스크톱 화면 우측에 **Sticky 목차(TOC)**가 자동으로 표시됩니다.

## 앞으로의 계획

개발하면서 마주한 문제 해결 과정, 아키텍처 고민, 렌더링/시스템 딥다이브 노트를 이곳에 차근차근 기록해 나가겠습니다.
