/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import { getUserInfo } from "@/http/api/app"
import QueueAnim from "rc-queue-anim"
import { useContext, useEffect, useState } from "react"
import { useRequest, useUpdate } from 'ahooks';
import { Spin, Button } from "antd";
import { KeepAliveContext } from "@/components/keepalive/KeepAlive";
export default function Dashboard() {
    let { data, error, loading, run, mutate } = useRequest(getUserInfo)
    const [value, setData] = useState<{ data: string }>({ data: '' })
    const destroy = useContext(KeepAliveContext)


    return (
        <QueueAnim style={{ height: '100%' }}>
            <Spin spinning={loading}>
                <div key={1} > <a href="">{data?.data}</a> </div>
            </Spin>
            <Button type="primary" onClickCapture={() => destroy('/admin/clipboard', true)}>销毁组件</Button>
        </QueueAnim>
    )
}