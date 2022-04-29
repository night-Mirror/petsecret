/*
 * @LastEditors: night
 * @Author: night
 */
import actions from "@/redux/actions"
import style from "./layout.module.less"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { useMemo, memo, useState, useEffect } from "react"
import Header from "@/common/header/Header"
import Footer from "@/common/footer/Footer"
function Layout() {
    const dispatch = useDispatch()
    return (
        <section className={style.layout}>
            <Header />
            <main style={{ flexGrow: 1 }}>
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}
export default memo(Layout)