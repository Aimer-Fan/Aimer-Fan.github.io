import type { DefaultThemeOptions } from "vuepress";
import { defineUserConfig } from "vuepress";
import navbar from "./navbar";
import siderbar from "./siderbar";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "AimerFan",
  description: "aimer fan's blog repo.",

  themeConfig: {
    logo: "/images/background.png",
    sidebar: siderbar,
    navbar: navbar
  },
});
