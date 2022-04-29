
/*
 * @Description: 前台路由管理
 * @LastEditors: night
 * @Author: night
 */
const appRoutes: RouteItem[] = [
    {
        index: true,
        component: () => import('@/app/page/home/Home'),
        meta: {
            title: '首页',
        },

    },
    {
        path: "/mine",
        component: () => import('@/app/page/mine/Mine'),
        meta: {
            title: "个人中心",
            // needLogin: true
        }
    }
]
export default appRoutes