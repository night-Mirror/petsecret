/*
 * @Description: 全局变量
 * @LastEditors: night
 * @Author: night
 */
import { language } from '@/utils';
import Cookies from 'js-cookie';
import { handleActions as createReducer, createActions } from 'redux-actions';
import { appActionType } from '../actionTypes';
export const action = createActions(
    `app_${appActionType.LOGIN}`,
    `app_${appActionType.LOGIN_OUT}`,
    `app_${appActionType.SET_USER_INFO}`,
    `app_${appActionType.REMOVE_USER_INFO}`,
    `app_${appActionType.SET_LANG}`,
    `app_${appActionType.SET_MARKET_ID}`,
)

const initialState: Redux.App = {
    userInfo: Cookies.get("userInfo") ? JSON.parse(Cookies.get("userInfo") as string) : {},
    token: Cookies.get("token"),
    lang: language(),
    marketId: 1
};
const app = createReducer({
    [appActionType.SET_USER_INFO]: (state, { payload }) => {
        return {
            ...state,
            userInfo: payload.userInfo
        }
    },
    [appActionType.LOGIN_OUT]: (state) => {
        Cookies.remove("userInfo")
        return {
            ...state,
            userInfo: {},
            token: ""
        }
    },
    [appActionType.SET_LANG]: (state, { payload }) => {
        Cookies.set("lang", payload.lang)
        return {
            ...state,
            lang: payload.lang
        }
    },
    [appActionType.SET_MARKET_ID]: (state, { payload }) => {
        return {
            ...state,
            marketId: payload.marketId
        }
    },
}, initialState, {
    prefix: 'app',
    namespace: "_"
});
export default app
