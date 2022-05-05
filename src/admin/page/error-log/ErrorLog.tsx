/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */

import SvgIcon from "@/common/svgIcon";
import { Alert, Button } from "antd";
import { useEffect, useState } from "react";
import ErrorTest from "./Error";

export default function ErrorLog() {
    const [bug, setBug] = useState(false)
    function start() {

    }
    const message = <span>部分 UI 的 JavaScript 错误不应该导致整个应用崩溃,为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界。</span>
    return (
        <div>
            <Alert message={message} type="success"></Alert>
            <br />
            <Button icon={<SvgIcon iconClass="bug" />} type="primary" onClick={() => { setBug(true) }}>异常抛出</Button>
            {bug ? <ErrorTest /> : ''}
        </div>
    )
}