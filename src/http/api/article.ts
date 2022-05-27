/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import request, { axiosSession } from "../http"
import base from "../base"
let api = base.articleUrl
/**
 * @description: 获取列表信息
 * @param {*} params
 * @return {*}
 */
export function getList(params = {}) {
    return request(`${api}/list`, {
        method: "get",
        params: params,
    })
}