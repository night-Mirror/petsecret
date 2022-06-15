/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */

import { Alert, Button } from 'antd';
import { forwardRef } from "react";
function Documentation() {
    const message = <><a href="https://github.com/939055129/petsecret" target="_blank">代码</a>就是文档</>
    return (
        <div>
            <div key={1}>
                <Alert message={message} type="success"></Alert>
            </div>
        </div>
    )
}
export default forwardRef(Documentation) 