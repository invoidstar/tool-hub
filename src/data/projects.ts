import type { Project } from "../types/project";

export const projects = [
  {
    slug: "color-matcher",
    title: "Color Matcher",
    mark: "CM",
    description: "从参考图识别颜色与区域，对照多套色卡完成配色、预览与制作清单整理。",
    category: "tool",
    status: "online",
    tags: ["Color", "Image", "Craft"],
    url: "https://invoidstar.github.io/color-matcher/",
    repository: "https://github.com/invoidstar/color-matcher",
  },
  {
    slug: "pattern-layout-studio",
    title: "Pattern Layout Studio",
    mark: "PL",
    description: "面向拆件图的浏览器工作台：自动提取部件、跨页排版、手动修复并导出生产用页面。",
    category: "tool",
    status: "online",
    tags: ["Layout", "Segmentation", "Browser"],
    url: "https://invoidstar.github.io/pattern-layout-studio/",
    repository: "https://github.com/invoidstar/pattern-layout-studio",
  },
] satisfies readonly Project[];
