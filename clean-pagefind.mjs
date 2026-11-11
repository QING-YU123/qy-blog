import { rmSync } from "node:fs";

// Remove generated indexes before Astro copies public assets. Otherwise old
// fragments survive after an article is deleted or its contents change.
rmSync(new URL("./public/pagefind/", import.meta.url), {
  recursive: true,
  force: true,
});
rmSync(new URL("./dist/pagefind/", import.meta.url), {
  recursive: true,
  force: true,
});
