/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import { getUserInfo } from "@/http/api/app"

import { useContext, useEffect, useState } from "react"
import { useRequest, useUpdate } from 'ahooks';
import { Spin, Button } from "antd";
import { KeepAliveContext } from "@/components/keepalive/KeepAlive";
export default function Dashboard() {
    console.log(1)
    let { data, error, loading, run, mutate } = useRequest(getUserInfo)
    const destroy = useContext(KeepAliveContext)
    return (
        <div style={{ height: '100%' }}>
            <Spin spinning={loading}>
                <div key={1} > {data?.data} </div>
            </Spin>
            <Button type="primary" onClickCapture={() => destroy('/admin/clipboard', true)}>销毁组件</Button>
        </div>
    )
}