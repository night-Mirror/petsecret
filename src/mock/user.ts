/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import { Dto } from "./mock"
const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}
const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}
const user = [
    {
        url: '/mock/user/login',
        type: 'post',
        response: (config: { body: { username: any } }) => {
            const { username } = config.body
            const token = tokens[username]
            if (!token) {
                return Dto.call({ message: 'Account and password are incorrect.' })
            }
            return Dto(1, token)
        }
    },
    {
        url: '/mock/user/getUser',
        type: 'get',
        response: (config: { query: { token: any } }) => {
            const { token } = config.query
            const info = users[token]
            if (!info) {
                return Dto.call({ message: 'Login failed, unable to get user details' })
            }
            return Dto(1, info)
        }
    }
]
export default user