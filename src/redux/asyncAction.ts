/*
 * @Description: 异步actions
 * @LastEditors: night
 * @Author: night
 */
import { getUserInfo } from '@/http/api/app';
import Cookies from 'js-cookie';
import actions from './actions';
export const asyncAction = {
    login: async (dispatch: Function) => {
        let { data } = await getUserInfo()
        if (data) {
            Cookies.set("userInfo", JSON.stringify(data))//存cookie
            dispatch(actions.appSetUserInfo(data))//存redux
        }
    }

}