/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */

import { handleActions as createReducer, createActions } from 'redux-actions';
import { adminType } from '../actionTypes';
import produce from "immer"
export const action = createActions(
    `admin_${adminType.ADD_ROUTER}`,
    `admin_${adminType.CLEAR_ROUTER}`,
    `admin_${adminType.REMOVE_ROUTER}`,
)

const adminState: Redux.Admin = {
    historyRouter: []
};
const admin = createReducer({
    [adminType.ADD_ROUTER]: produce((draft, { payload }) => {
        if ((draft.historyRouter.findIndex(item => item == payload as unknown as string))==-1) {
            draft.historyRouter.push(payload as any)
        }
    }),
    [adminType.REMOVE_ROUTER]: produce((draft, { payload }) => {
        draft.historyRouter.filter(item => item != payload as unknown as string)
    }),
    [adminType.CLEAR_ROUTER]: produce((draft) => {
        draft.historyRouter = []
    }),
}, adminState, {
    prefix: 'admin',
    namespace: "_"
});
export default admin
