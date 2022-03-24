/*
 * @Description: 后台路由管理
 * @LastEditors: night
 * @Author: night
 */
const adminRoutes: RouteItem[] = [
    {
        path: '/admin',
        component: () => import('@/page/home/Home'),
        meta: {
            title: '管理后台',
            needLogin: true,
        },
    },
]
export default adminRoutes