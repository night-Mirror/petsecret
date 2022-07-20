
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
            title: '宠物星球',
        },

    },
    {
        path: "/profile",
        component: () => import('@/app/page/profile/Profile'),
        meta: {
            title: "个人中心",
            // needLogin: true
        }
    }
]
export default appRoutes