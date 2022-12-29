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
                {text: "x-data", link: "/guide/x-data"},
                {text: "x-text", link: "/guide/x-text"},
                {text: "x-html", link: "/guide/x-html"},
                {text: "x-init", link: "/guide/x-init"},
                {text: "x-show", link: "/guide/x-show"},
                {text: "x-cloak", link: "/guide/x-cloak"},
                {text: "x-transition", link: "/guide/x-transition"},
                {text: "x-if", link: "/guide/x-if"},
                {text: "x-for", link: "/guide/x-for"},
                {text: "x-bind", link: "/guide/x-bind"},
                {text: "x-on", link: "/guide/x-on"},
                {text: "x-model", link: "/guide/x-model"},
                {text: "x-effect", link: "/guide/x-effect"},
            ]
        },
    ];
}
