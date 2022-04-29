/*
 * @Description: 后台路由管理
 * @LastEditors: night
 * @Author: night
 */
const adminRoutes: RouteItem[] = [
    {
        index: true,
        component: () => import('@admin/dashboard/Dashboard'),
        meta: {
            title: '管理后台-首页',
            menu: "首页",
            icon: "dashboard"
        },
    },
    {
        path: "documentation",
        component: () => import('@admin/documentation/Documentation'),
        meta: {
            title: '管理后台-文档',
            menu: "文档",
            icon: "documentation"
        },
    },
    {
        path: "guide",
        component: () => import('@admin/guide/Guide'),
        meta: {
            title: '管理后台-引导页',
            menu: "引导页",
            icon: "guide"
        },
    },
    {
        path: "permission",
        // redirect: "page",
        component: () => import('@admin/permission/Permission'),
        meta: {
            title: '管理后台-权限测试页',
            menu: "权限测试页",
            icon: "lock"
        },
        children: [
            {

                path: "page",
                index: true,
                component: () => import('@admin/permission/Page'),
                meta: {
                    title: '权限测试页-页面',
                    menu: "页面权限",
                },
            },
            {
                path: "role",
                component: () => import('@admin/permission/Role'),
                meta: {
                    title: '权限测试页-角色',
                    menu: "角色权限",
                },
            },

        ]
    },
    {
        path: "icon",
        component: () => import('@admin/icon/Icon'),
        meta: {
            title: '管理后台-图标',
            menu: "图标",
            icon: "icon"
        },
    },
    {
        path: "components",
        component: () => import('@admin/components/Components'),
        meta: {
            title: '管理后台-组件',
            menu: "组件",
            icon: "component"
        },
    },
    {
        path: "charts",
        component: () => import('@admin/charts/Charts'),
        meta: {
            title: '管理后台-图表',
            menu: "图表",
            icon: "chart"
        },
    },
    {
        path: "excel",
        component: () => import('@admin/excel/Excel'),
        meta: {
            title: '管理后台-表格',
            menu: "表格",
            icon: "excel"
        },
    },
    {
        path: "zip",
        component: () => import('@admin/zip/Zip'),
        meta: {
            title: '管理后台-Zip',
            menu: "Zip",
            icon: "zip"
        },
    },
    {
        path: "pdf",
        component: () => import('@admin/pdf/Pdf'),
        meta: {
            title: '管理后台-Pdf',
            menu: "Pdf",
            icon: "pdf"
        },
    },
    {
        path: "theme",
        component: () => import('@admin/theme/Theme'),
        meta: {
            title: '管理后台-主题',
            menu: "主题",
            icon: "theme"
        },
    },
    {
        path: "clipboard",
        component: () => import('@admin/clipboard/Cipboard'),
        meta: {
            title: '管理后台-剪贴板',
            menu: "剪贴板",
            icon: "clipboard"
        },
    },
    {
        path: "i18n",
        component: () => import('@admin/i18n/I18n'),
        meta: {
            title: '管理后台-国际化',
            menu: "国际化",
            icon: "international"
        },
    },
]
export default adminRoutes