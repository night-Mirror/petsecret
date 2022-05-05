/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import SvgIcon from "@/common/svgIcon"
import style from "./Icon.module.less"
import { Tooltip } from 'antd';

const svgs = require.context('@/assets/svg-icon/svg', false, /\.svg$/)
const modules = svgs.keys().reduce((modules: string[], modulePath: string) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    if (!moduleName.startsWith("assets")) {
        modules.push(moduleName)
    }
    return modules
}, [])
export default function Icon() {
    return (
        <div className={style.wrap}>
            {modules.map(item =>
                <span className={style.item} key={item}>
                    <Tooltip title={'<SvgIcon iconClass="' + item + '"/>'}>
                        <span>
                            <SvgIcon iconClass={item} style={{ fontSize: 32, marginBottom: 10 }}></SvgIcon>
                        </span>
                    </Tooltip>
                    <span>{item}</span>
                </span>
            )
            }
        </div >
    )
}