import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/alpinejs-study/",
    title: "Alpine.js 学习",
    description: "Alpine.js 学习记录",
    lastUpdated: true,
    head: [
        ['link', { rel: 'icon', href: '/alpinejs-study/images/favicon.ico' }],
    ],
    themeConfig: {
        logo: "/images/logo.svg",
        siteTitle: "",
        outlineTitle: "章节导航",
        outline: 'deep',
        lastUpdatedText: "最后更新时间",
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: "https://github.com/curder/alpine.js-study/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/alpinejs-study'}
        ],
        nav: nav(),
        sidebar: {
            "/guide": sidebarGuide(),
        }
    }
});

function nav() {
    return [
        {text: 'Guide', link: '/guide/install', activeMatch: '/guide/'},
    ];
}

function sidebarGuide() {
    return [
        {
            text: "基础",
            collapsible: true,
            collapsed: false,
            items: [
                {text: "安装", link: "/guide/install"},
                {
                    text: "所有指令",
                    link: "/guide/directives/index",
                    items: [
                        {text: "x-data", link: "/guide/directives/x-data"},
                        {text: "x-text", link: "/guide/directives/x-text"},
                        {text: "x-html", link: "/guide/directives/x-html"},
                        {text: "x-init", link: "/guide/directives/x-init"},
                        {text: "x-show", link: "/guide/directives/x-show"},
                        {text: "x-cloak", link: "/guide/directives/x-cloak"},
                        {text: "x-transition", link: "/guide/directives/x-transition"},
                        {text: "x-if", link: "/guide/directives/x-if"},
                        {text: "x-for", link: "/guide/directives/x-for"},
                        {text: "x-bind", link: "/guide/directives/x-bind"},
                        {text: "x-on", link: "/guide/directives/x-on"},
                        {text: "x-model", link: "/guide/directives/x-model"},
                        {text: "x-effect", link: "/guide/directives/x-effect"},
                        {text: 'x-ignore', link: "/guide/directives/x-ignore"},
                        {text: 'x-ref', link: "/guide/directives/x-ref"},
                        {text: 'x-teleport', link: "/guide/directives/x-teleport"},
                        {text: 'x-modelable', link: "/guide/directives/x-modelable"},
                        {text: 'x-id', link: "/guide/directives/x-id"},
                    ],
                },
                {
                    text: "魔法属性",
                    link: "/guide/magics/index",
                    items: [
                        {text: '$el', link: "/guide/magics/el"},
                        {text: "$refs", link: "/guide/magics/refs"},
                        {text: "$store", link: "/guide/magics/store"},
                        {text: "$watch", link: "/guide/magics/watch"},
                        {text: "$dispatch", link: "/guide/magics/dispatch"},
                        {text: "$nextTick", link: "/guide/magics/nextTick"},
                        {text: "$root", link: "/guide/magics/root"},
                        {text: "$data", link: "/guide/magics/data"},
                        {text: "$id", link: "/guide/magics/id"},
                    ],
                },
            ]
        },
    ];
}
