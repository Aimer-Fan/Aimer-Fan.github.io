import type { SidebarConfig } from "@vuepress/theme-default";

const sider: SidebarConfig = {
  "/web": [
    "/web/gcc",
    "/web/regexp",
    "/web/vue3-reactivity",
    "/web/cache",
    "/web/qiankun"
  ],
  "/tools": [
    "/tools/tapable",
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
      text: "node package manager",
      link: "/drafts/package-manager",
    },
  ],
  "/todo": [
    "/todo",
  ],
};

export default sider;
