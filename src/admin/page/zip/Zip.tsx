/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import { getList } from "@/http/api/article"
import { useRequest } from "ahooks"
import { Button, Input } from "antd"
import QueueAnim from "rc-queue-anim"
import { useEffect, useState } from "react"
export default function Zip() {
    const { loading, data, error } = useRequest(getList)
    console.log(1)
    let [name, setName] = useState("")
    function download() {
        console.log(1)
    }
    return (
        <QueueAnim>
            <Input.Group>
                <Input value={name} onChange={({ target }) => setName(target.value)} style={{ width: '200px' }} placeholder="请输入下载文件名"></Input>
                <Button onClick={download} type="primary">下载zip</Button>
            </Input.Group>
        </QueueAnim>

    )
}