/*
 * @LastEditors: night
 * @Author: night
 */
import { handleActions as createReducer, createActions } from 'redux-actions';
import { homeActionType } from '../actionTypes';
export const action = createActions(
    `home_${homeActionType.SET_INPUT}`,
)
const initialState = {
    input: "asin",
}
const App = createReducer({
    [homeActionType.SET_INPUT]: (state, action) => {
        return {
            ...state,
            input: action.payload.input
        }
    },
}, initialState, {
    prefix: 'home',
    namespace: "_"
});
export default App