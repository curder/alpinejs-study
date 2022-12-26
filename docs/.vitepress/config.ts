import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/alpine.js-study/",
    title: "Alpine.js 学习",
    description: "Alpine.js 学习记录",
    lastUpdated: true,
    themeConfig: {
        // logo: "https://alpinejs.dev/alpine_long.svg",
        // siteTitle: "Alpine.js 学习",
        outlineTitle: "章节导航",
        lastUpdatedText: "最后更新时间",
        editLink: {
            pattern: "https://github.com/curder/alpine.js-study/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/alpine.js-study'}
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
                {text: "x-text", link: "/guide/x-text"}
            ]
        },
    ];
}