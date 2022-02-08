/*
 * @LastEditors: night
 * @Author: night
 */

interface UserInfo {
    id: number
}
interface InitialState {
    userInfo: UserInfo,
    lang: string
    marketId: number,
}
interface App {
    userInfo: {
        id: number
    },
    lang:string,
    marketId:number
}
interface Store {
    app: app
}
interface SvgIcon {
    iconClass: string,
    fill?: string
}
interface actions {
    [propName: string]: any
}