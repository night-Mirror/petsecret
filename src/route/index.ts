/*
 * @Description: 路由整合
 * @LastEditors: night
 * @Author: night
 */

import Layout from '@/layout/layout';
import React from 'react';
import adminRoutes from './admin';
import appRoutes from './app';
// 路由集合 
// @ts-nocheck
const routes: RouteItem[] = [
    {
        path: "/",
        element: React.createElement(Layout),
        children: [...appRoutes],
    },
    ...adminRoutes,
    {
        path: '/login',
        component: () => import('@/page/login/Login'),
    },
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
