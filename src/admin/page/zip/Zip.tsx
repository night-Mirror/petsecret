/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */

import { Button, Input } from "antd"
import { KeepAliveContext } from "@/components/keepalive/KeepAlive";
import { useEffect, useState, useContext, } from "react"
export default function Zip() {
    let [name, setName] = useState("")
    const { destroy, isActive } = useContext(KeepAliveContext)
    const download = () => { }
    useEffect(() => {
        console.log('页面激活', isActive)
    }, [isActive])
    return (
        <div>
            <Input.Group>
                <Input value={name} onChange={({ target }) => setName(target.value)} style={{ width: '200px' }} placeholder="请输入下载文件名"></Input>
                <Button onClick={download} type="primary">下载zip</Button>
            </Input.Group>
        </div>

    )
}
