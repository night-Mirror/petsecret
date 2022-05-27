
/*
 * @LastEditors: night
 * @Author: night
 */

import { Button } from "antd"
import SvgIcon from "../../common/svgIcon/index"
import { useTranslation } from 'react-i18next'
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import actions from "@/redux/actions"
import ReactDOM from "react-dom"
import { useElement } from "@/hooks/utils"
export default function ListView() {
    const params = useParams()
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch()
    const container = useElement('div', 'test', (container: any) => { document.body.appendChild(container) })
    function change() {
        dispatch(actions.appSetLang(
            {
                lang: 'en'
            }
        ))
        i18n.changeLanguage('en')
    }
    return (
        <>{ReactDOM.createPortal(<div >
            <h2>Invoice: {params.invoiceId}</h2>
            <Button type="primary" onClick={change}> 切换语言</Button> <span className="wrap1">{t('main_name', { msg: 'test' })}<SvgIcon iconClass="cn" /></span>
        </div>, container)
        }</>

    )
}