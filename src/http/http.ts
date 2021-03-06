/*
 * @LastEditors: night
 * @Author: night
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from "axios";
import { message } from 'antd';
import NProgress from 'nprogress'
import { getQueryObject } from "@/utils";
import md5 from 'md5';
import qs from 'qs'
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import actions from "@/redux/actions";
NProgress.configure({ showSpinner: false })

const paramStr = (obj: { [x: string]: any; }) => {
    if (toString.call(obj) === '[object Object]') {
        return JSON.stringify(
            Object.keys(obj)
                .sort()
                .reduce((result, key) => {
                    result[key] = obj[key];
                    return result;
                }, {})
        );
    } else {
        return JSON.stringify(obj);
    }
};
// 唯一key
export const buildUniqueUrl = (url: string | Buffer | number[] | Uint8Array, params = {},) => {
    url += `?${paramStr(params)}`;
    return md5(url);
};
const errorTip = (code: number) => {
    switch (code) {
        case 404:
            message.error("网络请求不存在")
            break;
        case 500:
            message.error("服务器错误")
            break;
        default:
            break;
    }
}

let request: AxiosInstance = axios.create({
    timeout: 40000,
    withCredentials: true,//跨域携带cookie
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        // "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        // "Content-Type": "application/json;"
    }
})
request.interceptors.request.use((config: AxiosRequestConfig) => {
    let token = Cookies.get("token") || "";
    (config.headers as AxiosRequestHeaders)["token"] = token
    NProgress.start()
    if (config.headers && config.headers["Content-Type"] == "application/x-www-form-urlencoded;charset=UTF-8") {
        config.data = qs.stringify(config.data) // 转为formdata数据格式
    }
    if (config.method && config.method.toLowerCase() == "get" && config.params) {
        let url = config.url
        url += '?'
        let keys = Object.keys(config.params)
        for (let key of keys) {
            url += `${key}=${encodeURIComponent(config.params[key])}&`
        }
        if (url) {
            url = url.substring(0, url.length - 1)
        }
        config.params = {}
        config.url = url
    }
    return config
}, error => {
    return Promise.reject(error);
});
request.interceptors.response.use(
    (res) => {
        NProgress.done()
        if (res.status === 200) {
            if (res.data.code == "1") {
                return Promise.resolve(res.data)
            } else {
                if (res.data.code == "ERR_GLOBAL_SESSION_EXPIRED") {
                    const dispatch = useDispatch()
                    dispatch(actions.appSetUserInfo)
                    Cookies.remove("token")
                    Cookies.remove("userInfo")
                    window.location.href = "/login"
                } else if (res.data.code == "ERR_LOGIN_ACCOUNT_INCONSISTENT") {
                    return Promise.resolve(res.data)
                } else {
                    message.destroy()
                    message.error(res.data.message)
                }
                return Promise.resolve(res.data)
            }
        } else {
            message.destroy()
            errorTip(res.status)
            return Promise.reject(res.data)
        }

    },
    error => {
        NProgress.done()
        try {
            const { response } = error
            if (response) {
                message.destroy()
                errorTip(error.response.status)
                return Promise.reject(response);
            } else {
                if (error?.message?.includes('timeout')) {
                    message.error("请求超时,请刷新")
                    return Promise.reject(error)
                } else {
                    return Promise.reject(error)
                }
            }
        } catch (err) {
        }
    }
)
/**
 * @description: 请求数据放入sessionStorage
 * @param {*} url
 * @param {*} params
 * @return {*}
 */
export function axiosSession(url: string, params: {} | undefined) {
    const key = buildUniqueUrl(url, params);
    return new Promise((resolve, reject) => {
        let response: string | null
        response = window.sessionStorage.getItem(key)
        if (response) {
            resolve(JSON.parse(response))
        } else {
            request(url, params).then(res => {
                if (res) {
                    window.sessionStorage.setItem(key, JSON.stringify(res))
                    resolve(res)
                }
            }).catch(error => {
                reject(error)
            })
        }
    }
    )
}
export default request