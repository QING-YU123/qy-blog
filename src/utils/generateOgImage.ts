import { fontData, experimental_getFontFileURL } from "astro:assets";
import satori from "satori";
import sharp from "sharp";
import { getFontPathByWeight } from "./getFontPathByWeight";
import config from "@/config";

let fontPromise: Promise<ArrayBuffer> | undefined;

export async function generateOgImage(
  contextUrl: URL,
  title: string,
  description: string,
  author: string = config.site.author
): Promise<Uint8Array<ArrayBuffer>> {
  const fontPath = getFontPathByWeight(fontData["--font-noto-sans-sc"], 400);
  if (!fontPath) throw new Error("Missing local Noto Sans SC font.");

  fontPromise ??= fetch(experimental_getFontFileURL(fontPath, contextUrl)).then(
    response => {
      if (!response.ok) throw new Error("Unable to load the local OG font.");
      return response.arrayBuffer();
    }
  );

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 1200,
          height: 630,
          boxSizing: "border-box",
          padding: "64px 72px",
          background: "#fdfdfd",
          color: "#282728",
          borderTop: "12px solid #006cac",
          fontFamily: "Noto Sans SC",
        },
        children: [
          {
            type: "div",
            props: {
              style: { display: "flex", flexDirection: "column" },
              children: [
                {
                  type: "div",
                  props: {
                    style: { fontSize: 24, color: "#006cac", marginBottom: 28 },
                    children: config.site.title,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 64,
                      lineHeight: 1.3,
                      maxHeight: 180,
                      overflow: "hidden",
                    },
                    children: title,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 28,
                      lineHeight: 1.65,
                      color: "#6b7280",
                      marginTop: 24,
                      maxHeight: 100,
                      overflow: "hidden",
                    },
                    children: description,
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                justifyContent: "space-between",
                fontSize: 22,
                color: "#6b7280",
              },
              children: [
                { type: "span", props: { children: author } },
                {
                  type: "span",
                  props: { children: new URL(config.site.url).hostname },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Noto Sans SC",
          data: await fontPromise,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );

  return new Uint8Array(await sharp(Buffer.from(svg)).png().toBuffer());
}
