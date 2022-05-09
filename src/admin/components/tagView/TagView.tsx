/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */

import { useMeta } from "@/hooks/utils"
import actions from "@/redux/actions"
import adminRoutes from "@/route/admin"
import { Space, Tag } from "antd"
import React from "react"
import { useEffect, useMemo, memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

function TagView() {
    const dispatch = useDispatch()
    const historyRouter = useSelector((store: Redux.Store) => store.admin.historyRouter)
    const { pathname } = useLocation()
    // dispatch(actions.adminRemoveRouter(pathname))
    return useMemo(() => {
        dispatch(actions.adminAddRouter(pathname))
        let tags = historyRouter.map(item => {
            return useMeta(item, adminRoutes, "/admin")
        })
        console.log(tags)
        return (
            <Space>
                {tags.map(item => {
                    return <Tag>{item?.menu}</Tag>
                })}
            </Space>

        )
    }, [pathname])


}

export default React.memo(TagView) 