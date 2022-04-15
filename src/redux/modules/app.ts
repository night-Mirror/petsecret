/*
 * @Description: 全局变量
 * @LastEditors: night
 * @Author: night
 */
import { language } from '@/utils';
import Cookies from 'js-cookie';
import { handleActions as createReducer, createActions } from 'redux-actions';
import { appType } from '../actionTypes';
import produce from "immer"
export const action = createActions(
    `app_${appType.SET_USER_INFO}`,
    `app_${appType.SET_LANG}`,
    `app_${appType.SET_MARKET_ID}`,
    `app_${appType.SET_PRIMARY_COLOR}`,
    // `app_${appType.SET_ERROR_COLOR}`,
    // `app_${appType.SET_WARNING_COLOR}`,
    // `app_${appType.SET_SUCCESS_COLOR}`,
    // `app_${appType.SET_INFO_COLOR}`,
)

const initialState: Redux.App = {
    userInfo: Cookies.get("userInfo") ? JSON.parse(Cookies.get("userInfo") as string) : {},
    token: Cookies.get("token"),
    lang: language(),
    marketId: 1,
    primaryColor:'#1890ff'
};
const app = createReducer({
    [appType.SET_USER_INFO]: produce((draft, { payload: { userInfo } }) => {
        draft.userInfo = userInfo
    }),
    [appType.SET_LANG]: produce((draft, { payload: { lang } }) => {
        draft.lang = lang
    }),
    [appType.SET_MARKET_ID]: produce((draft, { payload: { marketId } }) => {
        draft.marketId = marketId
    }),
    [appType.SET_PRIMARY_COLOR]: produce((draft, { payload: { primaryColor } }) => {
        draft.primaryColor = primaryColor
    }),

}, initialState, {
    prefix: 'app',
    namespace: "_"
});
export default app
