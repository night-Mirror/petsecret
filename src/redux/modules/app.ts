/*
 * @LastEditors: night
 * @Author: night
 */

import { handleActions as createReducer, createActions } from 'redux-actions';
import { appActionType } from '../actionTypes';

export const action = createActions(
    `app_${appActionType.SET_LANG}`,
    `app_${appActionType.SET_MARKET_ID}`,
    `app_${appActionType.SET_USER_INFO}`,
)

const initialState: InitialState = {
    userInfo: {
        id: 1,
    },
    lang: "zh_CN",
    marketId: 1
}
const App = createReducer({
    [appActionType.SET_USER_INFO]: (state, action) => {
        return {
            ...state,
            userInfo: action.payload.userInfo
        }
    },
    [appActionType.SET_LANG]: (state, action) => {
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