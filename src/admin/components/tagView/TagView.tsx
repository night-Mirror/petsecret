/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */

import SvgIcon from "@/components/svgIcon"
import { useMeta } from "@/hooks/utils"
import { TweenOneGroup } from 'rc-tween-one';
import adminRoutes from "@/route/admin"
import { Space, Tag } from "antd"
import React, { useState } from "react"
import { useMemo, } from "react"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import style from "./TagView.module.less"
import { Scrollbars } from 'react-custom-scrollbars';
type tag = Required<ReturnType<typeof useMeta>>

function TagView() {
    const primaryColor = useSelector((store: Redux.Store) => store.app.primaryColor)
    let [tags, setTags] = useState([] as tag[])
    let [urls, setUrls] = useState([] as string[])
    const { pathname } = useLocation()
    function close(params: string) {
        setTags(tags.filter(item => item.fullPath !== params))
        urls = urls.filter(item => item !== params)
        setUrls(urls)
    }
    useMemo(() => {
        urls.push("/admin/dashboard")
        urls.push(pathname)
        urls = Array.from(new Set(urls))
        setUrls(urls)
        let tag = urls.map(item => {
            return useMeta(item, adminRoutes, "/admin")
        }).filter(item => item.menu)
        setTags(tag as tag[])
    }, [pathname])
    return useMemo(() => {
        return (
            <Scrollbars autoHeight>
                <div className={style.tagView}>
                    <Space size={4}>
                        <TweenOneGroup
                            enter={{
                                scale: 0.8,
                                opacity: 0,
                                type: 'from',
                                duration: 100,
                            }}
                            leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                            appear={false}
                            style={{ whiteSpace: "nowrap" }}
                        >
                            {tags.map((item, index) => {
                                return <span key={item.fullPath} style={{ display: 'inline-block' }}>
                                    <Tag icon={item.icon && <SvgIcon iconClass={item.icon} />}
                                        color={pathname === item.fullPath ? primaryColor : "#898989"}
                                        closable={index !== 0}
                                        onClose={(e) => { e.preventDefault(), close(item.fullPath) }}
                                    >
                                        <Link to={item.fullPath}>{item.menu}</Link>
                                    </Tag>
                                </span>
                            })}
                        </TweenOneGroup>
                    </Space>
                </div>

            </Scrollbars>
        )
    }, [tags, primaryColor])
}
export default React.memo(TagView) 