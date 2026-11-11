# 此在（Dasein）

清余（QINGYU）的个人博客。深圳大学研究生在读。

记录学习、思考与实践成果，也作为了解我、与我联系的窗口。

> A space to document my learning, reflections, and projects—and a window into who I am and how to reach me.

- 网站地址：<https://qing-yu123.github.io/qy-blog/>
- GitHub：<https://github.com/QING-YU123>
- 公开邮箱：<shouxinyin03@gmail.com>

## 本地运行

使用 Node.js 24 和 pnpm 11。

```sh
pnpm install
pnpm dev
```

开发地址为 <http://localhost:4321/qy-blog/>。首次使用搜索前，先执行 `pnpm build` 生成索引。

```sh
pnpm lint
pnpm format:check
pnpm build
pnpm preview
```

## 发布到 GitHub Pages

在 `QING-YU123/qy-blog` 仓库的 **Settings → Pages → Build and deployment** 中，将 Source 设置为 **GitHub Actions**。

推送到 `main` 后，`.github/workflows/deploy.yml` 会执行检查、构建、生成中文搜索索引并部署 `dist/`。也可在 Actions 中手动运行部署。

站点域名在 `astro-paper.config.ts` 的 `site.url` 中配置，仓库路径在 `astro.config.ts` 的 `base: "/qy-blog"` 中配置。将来更换仓库名或独立域名时，需要同步调整这两个位置。

## 写文章

在 `src/content/posts/` 中添加 Markdown 或 MDX 文件。例如，新建 `my-first-post.md`：

```yaml
---
title: "我的第一篇文章"
description: "文章简介"
pubDatetime: 2026-11-11T10:00:00+08:00
draft: false
tags:
  - 学习笔记
---
```

在 frontmatter 后编写正文。`author` 可省略，默认使用“清余（QINGYU）”。`draft: true` 的文章不公开发布。未来日期的文章会在该日期之后的下一次构建中发布。

原有演示文章已清理，文章列表、标签和归档会在发布内容后自动更新。

## 配置和中文化

- `astro-paper.config.ts`：站点名称、中英文简介、作者、联系方式和功能开关。
- `src/content/pages/about.md`：关于我。
- `src/i18n/lang/zh.ts`：中文界面；`en.ts` 保留英文翻译。
- `astro.config.ts`：默认语言、部署路径和本地字体。
- `public/favicon.svg`：站点图标。

当前默认语言为中文。新增其他语言时，还需添加对应页面路由和内容筛选，修改语言列表本身不会生成翻译页面。

网页默认使用本地霞鹜文楷（LXGW WenKai），通过 WOFF2 文件加载；字体加载期间先显示系统字体，加载完成后自动切换。分享封面在构建时使用随仓库提供的 Noto Sans SC 字体。两者均不依赖在线字体服务，来源、格式转换方式和许可见 `src/assets/fonts/README.md`。

## 许可

本站基于 AstroPaper 主题修改。原始 MIT 版权及许可声明保留在 [LICENSE](LICENSE) 中；霞鹜文楷和 Noto Sans SC 使用 SIL Open Font License。
