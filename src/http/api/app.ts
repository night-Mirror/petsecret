/*
 * @LastEditors: night
 * @Author: night
 */
import request, { axiosSession } from "../http"
import base from "../base"
/**
 * @description: 获取用户信息
 * @param {*} params
 * @return {*}
 */
export function getUserInfo(params = {}) {
    return new Promise<{ data: string }>((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: '123' })
        }, 2000);
    })

    // return request(`${api}/client`, {
    //     method: "get",
    //     params: params,
    // })
}