/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */

import SvgIcon from "@/components/svgIcon";
import { Alert, Button } from "antd";
;
import { useState } from "react";
import ErrorTest from "./Error";

export default function ErrorLog() {
    const [bug, setBug] = useState(false)
    const message = <span>
        部分 UI 的 JavaScript 错误不应该导致整个应用崩溃,为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界。<br />
        错误边界无法捕获以下场景中产生的错误:<br />
        1.事件处理(如点击事件,事件处理使用trycatch)<br />
        2.异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）<br />
        3.服务端渲染<br />
        4.它自身抛出来的错误（并非它的子组件）<br />
    </span>
    return (
        <div>
            <div key={1}>
                <Alert message={message} type="success"></Alert>
                <br />
                <Button icon={<SvgIcon iconClass="bug" />} type="primary" onClick={() => { setBug(true) }}>异常抛出</Button>
                {bug ? <ErrorTest /> : ''}
            </div>
        </div>

    )
}