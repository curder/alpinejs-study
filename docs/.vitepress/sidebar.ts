import {DefaultTheme} from "vitepress/types/default-theme";

const sidebar: DefaultTheme.Sidebar = {
    "": [{
        text: "安装",
        items: [{text: "安装", link: "/guide/install"},]
    }],
    "/guide/directives": [{
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
    }],
    "/guide/magics": [{
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
    }],
    "/guide/globals": [{
        text: "全局变量",
        items: [
            {text: "Alpine.data()", link: "/guide/globals/alpine-data"},
            {text: "Alpine.store()", link: "/guide/globals/alpine-store"},
            {text: "Alpine.bind()", link: "/guide/globals/alpine-bind"},
        ],
    }],
    '/guide/components': [{
        text: "组件",
        items: [
            {text: 'Dropdown', link: "/guide/components/dropdown"},
            {text: 'Modal', link: "/guide/components/modal"},
            {text: "Tabs", link: "/guide/components/tabs"},
            {text: "Carousel", link: "/guide/components/carousel"},
            {text: "Accordion", link: "/guide/components/accordion"},
            {text: "Notification", link: "/guide/components/notification"},
            {text: "Popover", link: "/guide/components/popover"},
        ]
    }],
    "guide/plugins": [{
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
    }],
}

export default sidebar