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
}
interface Store {
    app: app
}