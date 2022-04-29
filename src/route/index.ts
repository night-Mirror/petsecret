/*
 * @Description: 路由整合
 * @LastEditors: night
 * @Author: night
 */

import Layout from '@/app/layout/layout';
import adminLayout from '@/admin/layout/layout';
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
    {
        path: "/admin",
        element: React.createElement(adminLayout),
        children: [...adminRoutes],
    },
    {
        path: '/login',
        component: () => import('@app/login/Login'),
    },
    {
        path: '*',
        component: () => import('@/app/page/404'),
        meta: {
            title: '404',
        },
    },
]
export {
    routes,
}
