/*
 * @Description: 路由整合
 * @LastEditors: night
 * @Author: night
 */
import adminRoutes from './admin';
import appRoutes from './app';
// 路由集合 
const routes: RouteItem[] = [
    {
        path: '/',
        redirect: '/index',
    },

    {
        path: '/login',
        component: () => import('@/page/login/Login'),
        meta: {
            title: '登录',
        },
        children: [
            {
                path: 'test',
                component: () => import('@/page/login/Login'),
            }
        ],
    },
    ...appRoutes,
    ...adminRoutes,
    {
        path: '*',
        component: () => import('@/page/404'),
        meta: {
            title: '404',
        },
    },
]
export {
    routes,
}
