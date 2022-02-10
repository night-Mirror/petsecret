/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
let temp: null | ReactNode = null // 用于防止重复渲染
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
    // 判断未登录跳转登录页
    // if (meta.needLogin) {
        // if (!isLogin) {
        // return '/login'
        // }
    // }
}

function Guard({ element, meta }: { element: ReactNode, meta: {} }) {
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

export default Guard
