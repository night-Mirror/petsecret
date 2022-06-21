/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import SvgIcon from "@/components/svgIcon"
import { Button, Avatar, Badge, Input, Space, Menu } from "antd"
import style from "./Header.module.less"
import { UserOutlined, SearchOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';
const items: MenuProps['items'] = [
    {
        label: '宠物类目',
        key: 'mail',
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: '图片&视频',
        key: 'app',
    },
    {
        label: '宠物周边',
        key: 'SubMenu',

    },
    {
        label:'百科',
        key: 'alipay',
    },
];
export default function Header() {
    const [current, setCurrent] = useState('mail');
    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <header className={style.header}>
            <div className={style.left}>
                <a href="/"><SvgIcon iconClass="logo" className="logo" /></a>
                <div className={style.menu}><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /></div>
            </div>
            <div className={style.right}>
                <Space size="middle">
                    <Input size="middle" placeholder="search" prefix={<SearchOutlined />} style={{ width: 150 }} />
                    <Badge count={1}>
                        <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#ef9e13' }} />
                    </Badge>
                    <Button type="primary" size="middle" shape="round" >登录</Button>
                    <Button type="primary" size="middle" danger>上传</Button>
                </Space>
            </div>

        </header>
    )
}