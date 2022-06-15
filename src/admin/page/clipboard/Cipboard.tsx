/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import { Button, Input, Space, message } from "antd";
import { CheckCircleOutlined } from '@ant-design/icons';

import { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
export default function Cipboard() {
    const [finish, setFinish] = useState(false)
    const [input, setInput] = useState("copy 文本")
    return (
        <div>
            <div key={1}>
                <Space direction="vertical">
                    <Input.Group >
                        <Input value={input} onChange={e => setInput(e.target.value)} style={{ width: '200px' }} />
                        <CopyToClipboard text={input}
                            onCopy={() => {
                                setFinish(true);
                                setTimeout(() => {
                                    setFinish(false);
                                }, 1000)
                            }}>
                            <Button type="primary">{finish ? <CheckCircleOutlined /> : 'copy'}</Button>
                        </CopyToClipboard>
                    </Input.Group>
                </Space>
            </div>
        </div >
    )
}

