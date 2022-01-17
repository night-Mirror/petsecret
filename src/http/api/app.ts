/*
 * @LastEditors: night
 * @Author: night
 */
import request, { axiosSession } from "../http"
import base from "../base"
let api = base.newBase
/**
 * @description: 获取用户信息
 * @param {*} params
 * @return {*}
 */
export function getUserInfo(params = {}) {
    return request(`${api}/client`, {
        method: "get",
        params: params,
    })
}