/*
 * @LastEditors: night
 * @Author: night
 */

import { handleActions as createReducer, createActions ,handleAction} from 'redux-actions';
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
    lang: "en",
    marketId: 1
}
const App = createReducer({
    [appActionType.SET_USER_INFO]: (state, action) => {
        return {
            ...state,
            userInfo: action.payload as unknown as UserInfo
        }
    },
    [appActionType.SET_LANG]: (state, action) => {
        return {
            ...state,
            lang: action.payload as unknown as string
        }
    },
    [appActionType.SET_MARKET_ID]: (state, action) => {
        return {
            ...state,
            marketId: action.payload as unknown as number
        }
    },
}, initialState, {
    prefix: 'app',
    namespace: "_"
});
export default App