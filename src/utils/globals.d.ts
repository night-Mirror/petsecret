/*
 * @LastEditors: night
 * @Author: night
 */
/// <reference path="react-router-dom" />
/// <reference path="react-router" />
/// <reference path="moment" />
import { Moment } from 'moment';
import { RouteProps, RouteObject } from "react-router-dom"
import { NavigateOptions } from 'react-router'
export type * as Antd from "antd"

declare global {
    namespace Redux {
        interface UserInfo {
            id: number
        }
        interface InitialState {
            lang: string
            marketId: number,
        }
        interface User {
            userInfo: {},
            token: string | undefined
        }
        interface Store {
            app: InitialState,
            user:User
        }
    }
    type moment = Moment
    interface SvgIcon {
        iconClass: string,
        fill?: string
    }
    interface Actions {
        appSetUserInfo: Function,
        appRemoveUserInfo: Function,
        [propName: string]: any
    }
    interface RouteItem extends RouteObject {
        key?: string,
        redirect?: string,
        meta?: {
            title?: string,
            needLogin?: boolean,
            [propName: string]: any
        },
        component?: any
        children?: RouteItem[] | RouteObject[]

    }
    interface HistoryOptions extends NavigateOptions {
        query?: { [x: string]: string | number | boolean }
    }
} 