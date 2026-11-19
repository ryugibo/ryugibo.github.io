import { type CollectionEntry, getCollection } from "astro:content";

export type Post = CollectionEntry<"posts">;

export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getReadingTime(body?: string): number {
  if (!body) return 1;
  const plain = body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~\-|]/g, " ")
    .trim();

  const koreanChars = (plain.match(/[가-힣]/g) ?? []).length;
  const nonKoreanWords = plain
    .replace(/[가-힣]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = koreanChars / 500 + nonKoreanWords / 220;
  return Math.max(1, Math.round(minutes));
}
