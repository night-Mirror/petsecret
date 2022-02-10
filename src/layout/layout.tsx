/*
 * @LastEditors: night
 * @Author: night
 */
import actions from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"

export default function Layout() {
    const userInfo = useSelector((store: Redux.Store) => store.app.userInfo)
    const dispatch = useDispatch()
    function add() {
        dispatch(actions.appSetUserInfo(
            {
                userInfo: {
                    id: ++userInfo.id
                }
            }
        ))
    }
    return (
        <div >
            Layout
            <Outlet />
        </div>
    )
}