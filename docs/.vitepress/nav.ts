import {DefaultTheme} from "vitepress/types/default-theme";

const nav: DefaultTheme.NavItem[] = [
    {text: '安装', link: '/guide/install', activeMatch: '/guide/install'},
    {text: '指令', link: "/guide/directives/index", activeMatch: "/guide/directives/"},
    {text: "魔术属性", link: "/guide/magics/index", activeMatch: "/guide/magics/"},
    {text: "全局变量", link: "/guide/globals/index", activeMatch: "/guide/globals/"},
    {text: "插件", link: "/guide/plugins/index", activeMatch: "/guide/plugins/"},
];

export default nav