import {RouteRecordRaw} from "vue-router";

// 全局路由
export const routes = [
    // HACK：初始路由，登陆默认、home按钮都会跳转到此地址，注意指定到一个没有被菜单嵌套的地址(影响默认的左侧菜单选中)
    {name: "index", path: "/", redirect: "/pages/home"},
    {
        name: "notfound",
        path: "/:any(.*)",
        component: () => import("@/views/error/404/index.vue"),
        children: [],
        meta: {title: "404页面", icon: "", show: true},
    },
] as RouteRecordRaw[];
