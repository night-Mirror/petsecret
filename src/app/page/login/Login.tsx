

/*
 * @LastEditors: night
 * @Author: night
 */

import { asyncAction } from "@/redux/asyncAction"
import { useDispatch } from "react-redux"
import { useLocation, useParams, Outlet, } from "react-router"
import { useSearchParams } from "react-router-dom"


export default function Login() {
    const [params, setpPrams] = useSearchParams()
    const dispatch = useDispatch()
    function login() {
        console.log(1)
        dispatch(asyncAction.login)
    }
    return (
        <div>
            login
            <button onClick={login}>登录</button>
        </div>
    )
}