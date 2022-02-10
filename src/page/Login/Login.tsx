

/*
 * @LastEditors: night
 * @Author: night
 */

import { useLocation, useParams,Outlet, } from "react-router"
import { useSearchParams } from "react-router-dom"


export default function Login() {
    const [params,setpPrams] = useSearchParams()
    const Location = useLocation()
    console.log(params.toString())
    console.log(Location)
    return (
        <div>
            login
            <Outlet></Outlet>
        </div>
    )
}