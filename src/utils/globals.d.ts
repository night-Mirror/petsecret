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
        interface App {
            userInfo: {},
            token: string | undefined,
            lang: string
            marketId: number,
            primaryColor:string,
        }
        interface Store {
            app: App,
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
        appSetPrimaryColor: Function,
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