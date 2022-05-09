/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import { encodeQuery } from '@/utils'
import { useNavigate } from 'react-router'


/**
 * @description: 包裹Navigate可传路径与url查询参数
 * @param {*}
 * @return {*}
 */
export function useHistory() {
    const Navigate = useNavigate()
    const history = (to: string, options?: HistoryOptions) => {
        let query = options?.query ? "?" + encodeQuery(options.query) : ''
        delete options?.query
        Navigate(to + query, options)
    }
    return history
}
/**
 * @description: 根据url从路由表获取对应路由的完整路径，以及meta信息
 * @param {string} url
 * @param {RouteItem} routes
 * @param {*} rootUrl
 * @return {*}
 */

export function useMeta(url: string, Routes: RouteItem[], rootUrl = ""): {} {
    let route = {}
    for (let index = 0; index < Routes.length; index++) {
        const item = Routes[index];
        let key = item.path ? rootUrl + "/" + item.path : rootUrl
        if (key == url) {
            route = Routes[index].meta || {}
            route['fullPath'] = url
            break
        }
        if (url.startsWith(key) && Routes[index].children) {
            return useMeta(url, Routes[index].children as RouteItem[], key)
        }
    }
    return route
}
