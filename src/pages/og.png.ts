import type { APIRoute } from "astro";
import config from "@/config";
import { generateOgImage } from "@/utils/generateOgImage";

export const GET: APIRoute = async ({ url }) =>
  new Response(
    await generateOgImage(url, config.site.title, config.site.description),
    { headers: { "Content-Type": "image/png" } }
  );
