import {defineConfig} from 'vitepress'
import nav from "./nav";
import sidebar from "./sidebar";

export default defineConfig({
    lang: "zh-CN",
    base: "/alpinejs-study/",
    title: "Alpine.js 学习",
    description: "Alpine.js 学习记录",
    lastUpdated: true,
    head: [
        ['link', {rel: 'icon', href: '/alpinejs-study/images/favicon.ico'}],
    ],
    themeConfig: {
        logo: "/images/logo.svg",
        siteTitle: "",
        outline: {
            level: 'deep',
            label: "章节导航",
        },
        lastUpdated: {
            text: "最后更新时间",
        },
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
        nav,
        sidebar
    }
});