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
    `app_${appActionType.SET_LANG}`,
    `app_${appActionType.SET_MARKET_ID}`,
)

const initialState: Redux.InitialState = {
    lang: language(),
    marketId: 1
};

const App = createReducer({
    [appActionType.SET_LANG]: (state, action) => {
        Cookies.set("lang", action.payload.lang)
        return {
            ...state,
            lang: action.payload.lang
        }
    },
    [appActionType.SET_MARKET_ID]: (state, action) => {
        return {
            ...state,
            marketId: action.payload.marketId
        }
    },
}, initialState, {
    prefix: 'app',
    namespace: "_"
});
export default App