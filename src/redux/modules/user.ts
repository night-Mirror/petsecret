/*
 * @Description: 用户信息
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
)
const initialState: Redux.User = {
    userInfo: Cookies.get("userInfo") ? JSON.parse(Cookies.get("userInfo") as string) : {},
    token: Cookies.get("token"),
};
const User = createReducer({
    [appActionType.LOGIN]: (state, action) => {
        return {
            ...state,
            userInfo: action.payload.userInfo
        }
    },
    [appActionType.LOGIN_OUT]: (state, action) => {
        return {
            ...state,
            userInfo: {},
            token: ""
        }
    },
}, initialState, {
    prefix: 'app',
    namespace: "_"
});
export default User
