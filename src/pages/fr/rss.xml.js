import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteName } from "../../config/site";

// RSS feed for French posts.
export async function GET(context) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.lang === "fr")
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${siteName} — Blog`,
    description: "Articles et notes de Thierno DIALLO.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/fr/blog/${post.id}/`,
    })),
  });
}
