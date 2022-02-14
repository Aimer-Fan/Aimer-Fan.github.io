import type { SidebarConfig } from "@vuepress/theme-default";

const sider: SidebarConfig = {
  "/web": [
    "/web/gcc",
    "/web/regexp",
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
  ],
  "/todo": [
    "/todo",
  ],
};

export default sider;
