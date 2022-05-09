/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import style from "./System.module.less"
import actions from "@/redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { useMemo, memo, useState, } from "react"
import { Switch, Drawer, Popover, Button } from 'antd';
import {
    SettingOutlined,
    SkinFilled,
} from '@ant-design/icons';
import { SketchPicker } from 'react-color';
export default function System() {
    const [visible, setVisible] = useState(false)
    const [poperVisible, setPoperVisible] = useState(false)
    const primaryColor = useSelector((store: Redux.Store) => store.app.primaryColor)
    const [color, setColor] = useState(primaryColor)
    const dispatch = useDispatch()
    const content = <div>
        <SketchPicker
            presetColors={['#1890ff', '#25b864', '#ff6f00']}
            className={style.sketchPicker}
            color={color}
            onChange={({ hex }) => {
                setColor(hex)
            }}
        />
        <span style={{
            textAlign: 'right',
            position: "absolute",
            bottom: '18px',
            right: '24px',
        }}><Button type="primary" size="small" onClick={() => {
            dispatch(actions.appSetPrimaryColor(
                {
                    primaryColor: color
                }
            ))
            setPoperVisible(false)
        }}>确定</Button></span>
    </div>
    return (
        <Drawer
            title="系统布局配置"
            placement="right"
            closable={false}
            onClose={() => setVisible(!visible)}
            visible={visible}
            getContainer={false}
            forceRender
            width="280"
        >
            <div className={style.theme}>主题色
                <Popover content={content} placement="bottomLeft" trigger="click" overlayClassName="my-popover" visible={poperVisible}>
                    <SkinFilled style={{ color: primaryColor, cursor: "pointer", }} onClick={() => setPoperVisible(true)} />
                </Popover>
            </div>
            <p><span>开启 Tags-View</span><Switch size="small" /></p>
            <p><span>固定 Header</span><Switch size="small" /></p>
            <p><span>侧边栏 Logo</span><Switch size="small" /></p>
            <p><span>菜单支持拼音搜索</span><Switch size="small" /></p>
            <div className={style.handleButton} onClick={() => setVisible(!visible)}><SettingOutlined /></div>
        </Drawer>
    )

}