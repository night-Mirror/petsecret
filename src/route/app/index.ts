import Meta from 'antd/lib/card/Meta'

/*
 * @Description: 前台路由管理
 * @LastEditors: night
 * @Author: night
 */
const appRoutes: RouteItem[] = [
    {
        path: '/index',
        component: () => import('@/page/home/Home'),
        meta: {
            title: '首页',
        },

    },
    {
        path: "/mine",
        component: () => import('@/page/mine/Mine'),
        meta: {
            title: "个人中心",
            needLogin: true
        }
    }
]
export default appRoutes