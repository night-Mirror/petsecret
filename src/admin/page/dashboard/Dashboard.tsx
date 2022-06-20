/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */


import { useContext, } from "react"
import {  Button } from "antd";
import { KeepAliveContext } from "@/components/keepalive/KeepAlive";
export default function Dashboard() {
    const { destroy } = useContext(KeepAliveContext)
    return (
        <div style={{ height: '100%' }}>
            <Button type="primary" onClickCapture={() => destroy('/admin/clipboard', true)}>销毁组件</Button>
        </div>
    )
}