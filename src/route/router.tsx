/*
 * @Description: 路由包裹
 * @LastEditors: night
 * @Author: night
 */
import { ReactElement } from 'react'
import { Navigate, useLocation, RouteObject } from 'react-router-dom'
import React from 'react'
import { LoadingOutlined } from "@ant-design/icons"
import NProgress from 'nprogress'
let temp: null | ReactElement = null // 用于防止重复渲染
/**
 * @description: 全局路由拦截
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义meta字段
 * @return {string} 需要跳转到其他页时就return一个该页的path路径
 */
const onRouteBefore = ({ pathname, meta }: any): string | void => {
    // 动态修改页面title
    if (meta.title !== undefined) {
        document.title = meta.title
    }
    // // 判断未登录跳转登录页
    // if (meta.needLogin) {

    //     return '/login'

    // }
}
/**
 * @description: 路由守卫包裹
 * @param {*} param1
 * @param {*} meta
 * @return {*}
 */
function Router({ element, meta }: { element: ReactElement, meta: {} }) {
    const location = useLocation()
    const { pathname } = location
    meta = meta || {}

    const handleRouteBefore = onRouteBefore
    if (handleRouteBefore) {
        if (temp === element) {
            return element
        }
        const newPath = handleRouteBefore({ pathname, meta })
        if (newPath && newPath !== pathname) {
            element = <Navigate to={newPath} />
        }
    }

    temp = element
    return element

}

/**
 * @description: 路由懒加载包裹
 * @param {function} importFn
 * @param {object} meta
 * @return {*}
 */
function lazyLoad(importFn: () => Promise<{ default: React.ComponentType<any>; }>, meta: object | undefined) {
    NProgress.start()
    meta = meta || {}
    const Element = React.lazy(importFn)
    const lazyElement = (
        <React.Suspense fallback={<LoadingOutlined />}>
            < Element _meta={meta} />
        </React.Suspense>
    )
    NProgress.done()
    return <Router element={lazyElement} meta={meta} />
}

/**
 * @description: 转换为react router props
 * @param {RouteItem} routes
 * @return {*}
 */
function transformRoutes(routes: RouteItem[]) {
    const list: RouteObject[] = []
    routes.forEach(route => {
        const obj = { ...route }
        if (obj.redirect) {
            obj.element = <Navigate to={obj.redirect} />
        }
        if (obj.component) {
            obj.element = lazyLoad(obj.component, obj.meta)
        }
        delete obj.redirect
        delete obj.component
        delete obj.meta
        if (obj.children) {
            obj.children = transformRoutes(obj.children as RouteItem[])
        }
        list.push(obj)
    })
    return list
}
export default transformRoutes
