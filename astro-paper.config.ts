import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://qing-yu123.github.io/",
    title: "此在（Dasein）",
    description: "记录学习、思考与实践成果，也作为了解我、与我联系的窗口。",
    descriptionEn:
      "A space to document my learning, reflections, and projects—and a window into who I am and how to reach me.",
    author: "清余（QINGYU）",
    profile: "https://github.com/QING-YU123",
    ogImage: "og.png",
    lang: "zh",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/QING-YU123/qy-blog/edit/main/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    {
      name: "github",
      url: "https://github.com/QING-YU123",
      linkTitle: "访问清余的 GitHub 主页",
    },
    {
      name: "mail",
      url: "mailto:shouxinyin03@gmail.com",
      linkTitle: "发送邮件给清余",
    },
  ],
  shareLinks: [{ name: "mail", url: "mailto:?subject=分享文章&body=" }],
});
