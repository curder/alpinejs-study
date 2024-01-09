import {DefaultTheme} from "vitepress/types/default-theme";

const nav: DefaultTheme.NavItem[] = [
    {text: '安装', link: '/guide/install', activeMatch: '/guide/install'},
    {text: '指令', link: "/guide/directives/index", activeMatch: "/guide/directives/"},
    {text: "魔术属性", link: "/guide/magics/index", activeMatch: "/guide/magics/"},
    {text: "全局变量", link: "/guide/globals/index", activeMatch: "/guide/globals/"},
    {
        text: "其他",
        activeMatch: "guide/components|plugins/",
        items: [
            // {text: '组件', link: '/guide/components/index', activeMatch: '/guide/components/'},
            {text: "插件", link: "/guide/plugins/index", activeMatch: "/guide/plugins/"},
        ]
    },
];

export default nav