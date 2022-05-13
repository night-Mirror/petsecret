/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import { getUserInfo } from "@/http/api/app"
import QueueAnim from "rc-queue-anim"
import { useEffect, useState } from "react"
import { useRequest, useUpdate } from 'ahooks';
import { Spin } from "antd";
export default function Dashboard() {
    let { data, error, loading, run, mutate } = useRequest(getUserInfo)
    const [value, setData] = useState<{ data: string }>({ data: '' })

    // useEffect(() => {
    //     update()
    // }, [])

    return (
        <QueueAnim style={{height:'100%'}}>
            <Spin spinning={loading}>
                <div key={1} > <a href="">{data?.data}</a> </div>
            </Spin>
            {/* <div key={1}> <a href="">test</a> </div> */}
        </QueueAnim>
    )
}