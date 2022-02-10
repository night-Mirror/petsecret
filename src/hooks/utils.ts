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
function useHistory() {
    const Navigate = useNavigate()
    const history = (to: string, options?: HistoryOptions) => {
        let query = options?.query ? "?" + encodeQuery(options.query) : ''
        delete options?.query
        Navigate(to + query, options)
    }
    return history
}
export {
    useHistory
}
