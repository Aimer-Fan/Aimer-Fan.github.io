import { defaultTheme } from "vuepress";
import { defineUserConfig } from "vuepress";
import navbar from "./navbar";
import siderbar from "./siderbar";

export default defineUserConfig({
  lang: "zh-CN",
  title: "AimerFan",
  description: "aimer fan's blog repo.",

  theme: defaultTheme({
    logo: "/images/background.png",
    sidebar: siderbar,
    navbar: navbar
  }),
});
