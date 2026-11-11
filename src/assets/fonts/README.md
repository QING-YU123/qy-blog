# 本地字体

## 默认网页字体：霞鹜文楷

`LXGWWenKai-Regular.ttf` 是提供的霞鹜文楷常规字重字体。网页使用由它无损转换得到的 `LXGWWenKai-Regular.woff2`，保留原有字形覆盖范围；原始 TTF 不用于网页下载。

默认字体在 `astro.config.ts` 中注册，在 `src/layouts/Layout.astro` 中输出字体声明，再由 `src/styles/theme.css` 的 `--font-app` 应用到全站。搜索界面沿用相同字体。当前只有常规字重，粗体和斜体由浏览器合成。

- 上游：[LXGW / LxgwWenKai](https://github.com/lxgw/LxgwWenKai)
- 网页格式转换：`fonttools ttLib.woff2 compress --no-glyf-transform src/assets/fonts/LXGWWenKai-Regular.ttf`
- 许可：[SIL Open Font License 1.1](LXGWWenKai-OFL.txt)

替换原始字体后，重新执行上面的转换命令并构建网站即可更新网页字体。

## 分享封面字体：Noto Sans SC

`NotoSansSC-Regular.ttf` 是 Noto Sans SC 在字重 400 处的静态实例，用于 Satori 生成中文分享封面，网页正文无需下载此字体。

- 上游：[Google Fonts / Noto Sans SC](https://github.com/google/fonts/tree/main/ofl/notosanssc)
- 来源：`NotoSansSC[wght].ttf`
- 生成：使用 fontTools 的 `instantiateVariableFont(font, {"wght": 400})` 转换为静态字体。
- 许可：[SIL Open Font License 1.1](OFL.txt)
