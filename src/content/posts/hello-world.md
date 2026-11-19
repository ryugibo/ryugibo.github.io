---
title: 'Astro와 daisyUI로 첫 블로그 시작하기'
description: 'Astro, Tailwind CSS, daisyUI, 그리고 GitHub Pages로 개인 블로그를 세팅했습니다.'
pubDate: 2026-11-19
tags: ['astro', 'daisyui', 'blog']
---

안녕하세요! **Astro + daisyUI + GitHub Pages** 조합으로 개인 블로그를 시작했습니다.

## 이 블로그의 구성

- **Astro**: 빠른 정적 사이트 생성과 깔끔한 Markdown/MDX 콘텐츠 컬렉션
- **Tailwind CSS v4 + daisyUI v5**: 유틸리티 클래스와 시맨틱 컴포넌트로 간결한 UI와 라이트/다크 테마 지원
- **GitHub Pages**: `main` 브랜치에 푸시하면 GitHub Actions가 자동으로 빌드하고 배포

## 새 글 작성 방법

`src/content/posts/` 폴더에 `.md` 또는 `.mdx` 파일을 추가하면 됩니다.

```markdown
---
title: '새 글 제목'
description: '글 요약 설명'
pubDate: 2026-11-19
tags: ['dev']
---

본문 내용을 작성합니다.
```

> 앞으로 개발하면서 배운 것들과 생각을 차근차근 기록해 보겠습니다.
