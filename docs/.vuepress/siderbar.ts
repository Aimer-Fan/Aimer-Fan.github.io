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
  ],
  "/todo": [
    "/todo",
  ],
};

export default sider;
