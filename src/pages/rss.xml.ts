import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import site from "../data/site.json";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => data.published))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: `${site.siteName} Blog`,
    description: site.siteDescription,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  });
}
