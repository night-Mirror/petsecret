/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import { Button, Input } from "antd"
import QueueAnim from "rc-queue-anim"
import { useEffect, useState } from "react"
export default function Zip() {
    let [data, setData] = useState("")
    function download() {
        console.log(1)
    }


    return (
        <QueueAnim>
            <Input.Group>
                <Input value={data} onChange={({ target }) => setData(target.value)} style={{ width: '200px' }} placeholder="请输入下载文件名"></Input>
                <Button onClick={download} type="primary">下载zip</Button>
            </Input.Group>
        </QueueAnim>

    )
}