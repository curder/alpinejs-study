import {defineConfig} from 'vitepress'

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
            "": sidebarInstall(),
            "/guide/directives": sidebarDirectives(),
            "/guide/magics": sidebarMagics(),
            "/guide/globals": sideGlobals(),
            '/guide/components': sidebarComponents(),
            "guide/plugins": sidebarPlugins(),
        }
    }
});

function nav() {
    return [
        {text: '安装', link: '/guide/install', activeMatch: '/guide/install'},
        {text: '指令', link: "/guide/directives/index", activeMatch: "/guide/directives/"},
        {text: "魔术属性", link: "/guide/magics/index", activeMatch: "/guide/magics/"},
        {text: "全局变量", link: "/guide/globals/index", activeMatch: "/guide/globals/"},
        {text: '组件', link: '/guide/components/index', activeMatch: '/guide/components/'},
        {text: "插件", link: "/guide/plugins/index", activeMatch: "/guide/plugins/"},
    ];
}

function sidebarInstall() {
    return [
        {
            text: "安装",
            // collapsible: true,
            // collapsed: false,
            items: [
                {text: "安装", link: "/guide/install"},
            ]
        },
    ];
}

function sidebarDirectives() {
    return [
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
    ];
}

function sidebarMagics() {
    return [
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
    ];
}

function sideGlobals() {
    return [
        {
            text: "全局变量",
            // collapsible: true,
            // collapsed: false,
            items: [
                {text: "Alpine.data()", link: "/guide/globals/data"},
            ],
        }
    ];
}

function sidebarComponents() {
    return [
        {
            text: "组件",
            // collapsible: true,
            // collapsed: false,
            items: [
                {text: 'Dropdown', link: "/guide/components/dropdown"},
                {text: 'Modal', link: "/guide/components/modal"},
                {text: "Tabs", link: "/guide/components/tabs"},
                {text: "Carousel", link: "/guide/components/carousel"},
                {text: "Accordion", link: "/guide/components/accordion"},
                {text: "Notification", link: "/guide/components/notification"},
                {text: "Popover", link: "/guide/components/popover"},
            ]
        },
    ];
}

function sidebarPlugins() {
    return [
        {
            text: "插件",
            // collapsible: true,
            // collapsed: false,
            items: [
                {text: 'Mask', link: "/guide/plugins/mask"},
                {text: 'Intersect', link: "/guide/plugins/intersect"},
                {text: "Persist", link: "/guide/plugins/persist"},
                {text: "Focus", link: "/guide/plugins/focus"},
                {text: "Collapse", link: "/guide/plugins/collapse"},
                {text: "Morph", link: "/guide/plugins/morph"},
            ]
        }
    ];
}
