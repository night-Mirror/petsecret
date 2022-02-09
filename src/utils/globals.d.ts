/*
 * @LastEditors: night
 * @Author: night
 */
import { Moment } from 'moment';
export type * as antd from "antd"
declare global {
    namespace Redux {
        interface UserInfo {
            id: number
        }
        interface InitialState {
            userInfo: UserInfo,
            lang: string
            marketId: number,
        }
        interface Store {
            app: InitialState
        }
    }
    type moment = Moment
    interface SvgIcon {
        iconClass: string,
        fill?: string
    }
    interface Actions {
        [propName: string]: any
    }


} 