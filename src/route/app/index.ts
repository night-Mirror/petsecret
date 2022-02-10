/*
 * @Description: 前台路由管理
 * @LastEditors: night
 * @Author: night
 */
const appRoutes: RouteItem[] = [
    {
        path: '/index',
        component: () => import('@/page/home/home'),
        meta: {
            title: '首页',
            needLogin: true,
        },
        children: [
            {
                path: 'test',
                component: () => import('@/components/imgCard/imgCard'),
            }
        ],
    },
]
export default appRoutes