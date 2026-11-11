import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getPostSlug } from "@/utils/getPostPaths";
import { postFilter } from "@/utils/postFilter";
import { generateOgImage } from "@/utils/generateOgImage";
import config from "@/config";

export async function getStaticPaths() {
  if (!config.features.dynamicOgImage) return [];
  const posts = await getCollection("posts");
  return posts
    .filter(post => postFilter(post) && !post.data.ogImage)
    .map(post => ({
      params: { slug: getPostSlug(post.id, post.filePath) },
      props: post,
    }));
}

export const GET: APIRoute = async ({ props, url }) => {
  if (!config.features.dynamicOgImage)
    return new Response(null, { status: 404 });
  return new Response(
    await generateOgImage(
      url,
      props.data.title,
      props.data.description,
      props.data.author
    ),
    { headers: { "Content-Type": "image/png" } }
  );
};
