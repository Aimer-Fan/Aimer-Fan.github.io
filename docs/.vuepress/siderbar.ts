import type { SidebarConfig } from "@vuepress/theme-default";

const sider: SidebarConfig = {
  "/web": [
    {
      text: "Javascript",
      collapsible: true,
      children: [
        "/web/javascript/gcc",
        "/web/javascript/regexp"
      ]
    },
    {
      text: "小工具库",
      collapsible: true,
      children: [
        "/web/tools/tapable"
      ]
    },
  ]
};

export default sider;
