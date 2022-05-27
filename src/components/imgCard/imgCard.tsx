/*
 * @LastEditors: night
 * @Author: night
 */


import styles from "./style/index.module.less"
import { useTranslation } from 'react-i18next'
import ReactDOM from "react-dom"
import { useEffect, useRef } from "react"
export default function ImgCard() {
    const { t, i18n } = useTranslation();
    let target = useRef<HTMLElement>()
    useEffect(() => {
        let container = document.getElementById("test")
        if (!container) {
            container = document.createElement("div")
            container.id = "test"
        }
        target.current = container
        document.body.appendChild(container)

    }, [])
    return (
        <>{target.current &&
            ReactDOM.createPortal(<div className={styles.wrap}>
              <span className="wrap1">{t('main_name', { msg: 'test' })}</span>
            </div>, target.current)
        }</>

    )
}