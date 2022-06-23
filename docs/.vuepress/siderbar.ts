import type { SidebarConfig } from "@vuepress/theme-default";

const sider: SidebarConfig = {
  "/web": [
    "/web/qiankun",
    "/web/gzip",
    "/web/gcc",
    "/web/regexp",
    "/web/vue3-reactivity",
    "/web/cache",
    "/web/cross-origin",
    "/web/cross-origin-resource-sharing",
    "/web/download-file",
  ],
  "/tools": [
    // "/tools/tapable",
    "/tools/vim",
  ],
  "/drafts": [
    {
      text: "Vue自定义指令实现权限分配",
      link: "/drafts/permission",
    },
    {
      text: "brew 更换源",
      link: "/drafts/brew-change-origin",
    },
    {
      text: "ShadowSocksR",
      link: "/drafts/shadow-socks-r",
    },
    {
      text: "v2ray",
      link: "/drafts/v2ray",
    },
    {
      text: "package.json",
      link: "/drafts/package.json",
    },
    {
      text: "node 包管理工具",
      link: "/drafts/package-manager",
    },
  ],
  "/todo": [
    "/todo",
  ],
  "/sql": [
    "/sql/01_abstract",
    "/sql/02_grammar",
    "/sql/03_select",
    "/sql/04_operator",
    "/sql/05_order_and_page",
  ],
};

export default sider;
