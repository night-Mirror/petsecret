/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */

import { handleActions as createReducer, createActions } from 'redux-actions';
import { adminType } from '../actionTypes';
import produce from "immer"
export const action = createActions(
    `admin_${adminType.SET_TAGS_VIEW}`,
    `admin_${adminType.SHOW_LOGO}`,
    `admin_${adminType.FIX_HEADER}`,
)

const adminState: Redux.Admin = {
    showTagsView: true,
    showLogo: false,
    fixHeader: false,
};
const admin = createReducer({
    [adminType.SET_TAGS_VIEW]: produce((draft, { payload: { showTagsView } }) => {
        draft.showTagsView = showTagsView
    }),
    [adminType.SHOW_LOGO]: produce((draft, { payload: { showLogo } }) => {
        draft.showLogo = showLogo
    }),
    [adminType.FIX_HEADER]: produce((draft, { payload: { fixHeader } }) => {
        draft.fixHeader = fixHeader
    }),

}, adminState, {
    prefix: 'admin',
    namespace: "_"
});
export default admin
