/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import Mock from "mockjs"
import article from "./article"
import user from "./user"
function param2Obj(url: string) {
    const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
    if (!search) {
        return {}
    }
    const obj = {}
    const searchArr = search.split('&')
    searchArr.forEach(v => {
        const index = v.indexOf('=')
        if (index !== -1) {
            const name = v.substring(0, index)
            const val = v.substring(index + 1, v.length)
            obj[name] = val
        }
    })
    return obj
}
export function Dto(this: any, code = 0, params: any = null, message = this?.message || '') {
    return {
        code: code,
        data: params,
        message: message,
    }
}

Mock.setup({
    timeout: 200 - 600
})
const mocks = [
    ...article,
    ...user,
]
function mockXHR() {
    // mock patch
    // https://github.com/nuysoft/Mock/issues/300
    Mock['XHR'].prototype.proxy_send = Mock['XHR'].prototype.send
    Mock['XHR'].prototype.send = function () {
        if (this.custom.xhr) {
            this.custom.xhr.withCredentials = this.withCredentials || false

            if (this.responseType) {
                this.custom.xhr.responseType = this.responseType
            }
        }
        this.proxy_send(...arguments)
    }

    function XHR2ExpressReqWrap(respond: any) {
        return function (options: { body: any; type: any; url: any }) {
            let result = null
            if (respond instanceof Function) {
                const { body, type, url } = options
                // https://expressjs.com/en/4x/api.html#req
                result = respond({
                    method: type,
                    body: JSON.parse(body),
                    query: param2Obj(url)
                })
            } else {
                result = respond
            }
            return Mock.mock(result)
        }
    }

    for (const i of mocks) {
        Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
    }
}

export default {
    mocks,
    mockXHR
}


