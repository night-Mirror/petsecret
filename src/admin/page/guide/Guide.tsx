/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import { Alert, Button } from 'antd';
import { QuestionCircleOutlined } from "@ant-design/icons"
import Driver from "driver.js"
import QueueAnim from 'rc-queue-anim';
import { useMemo, memo } from 'react';
let driver = new Driver()
driver.defineSteps([
    {
        element: '#hamburger-container',
        popover: {
            title: 'Hamburger',
            description: 'Open && Close sidebar',
            position: 'bottom'
        }
    },
    {
        element: '#breadcrumb-container',
        popover: {
            title: 'Breadcrumb',
            description: 'Indicate the current page location',
            position: 'bottom'
        }
    },
])


function Guide() {
    return useMemo(() => {
        function start(e: { stopPropagation: () => void; }) {
            e.stopPropagation();
            driver.start()
        }
        const message = <span>引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于<a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a></span>
        return (
            <QueueAnim >
                <div key={1}>
                    <Alert message={message} type="success"></Alert>
                    <br />
                    <Button icon={<QuestionCircleOutlined />} type="primary" onClick={start}>打开引导</Button>
                </div>
            </QueueAnim>
        )
    }, [])
}
export default memo(Guide)