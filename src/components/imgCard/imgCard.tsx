/*
 * @LastEditors: night
 * @Author: night
 */

import { Button } from "antd"
import styles from "./style/index.module.less"
import SvgIcon from "../../common/svgIcon/index"
import { useTranslation } from 'react-i18next'

import { useDispatch } from "react-redux"
import actions from "@/redux/actions"
export default function ImgCard() {
    const {t,i18n} = useTranslation();
    const dispatch = useDispatch()
    function change() {
        dispatch(actions.appSetLang(
            {
                lang: 'en_US'
            }
        ))
        i18n.changeLanguage('en_US')
    }
    return (
        <div className={styles.wrap}>
            <Button type="primary" onClick={change}> 切换语言</Button> <span className="wrap1">{t('main_name', { msg: 'test' })}<SvgIcon iconClass="cn" /></span>
        </div>
    )
}