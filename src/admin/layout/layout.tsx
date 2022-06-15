/*
 * @LastEditors: night
 * @Author: night
 */
import style from "./layout.module.less"
import logo from "@/assets/images/logo.png"
import { Link, Outlet, useLocation, useOutlet } from "react-router-dom"
import { memo, useState, } from "react"
import { Layout, Menu, MenuProps, Affix } from 'antd';
import React from "react"
import SvgIcon from "@/common/svgIcon"
import adminRoutes from "@/route/admin"
import ErrorBoundary from "@/common/errorBoundary/ErrorBoundary"
import { Scrollbars } from 'react-custom-scrollbars';
import System from "../components/system/System"
import AdminHeader from "../components/header/Header"
import TagView from "../components/tagView/TagView";
import { useSelector } from "react-redux";
import KeepAlive from "@/components/keepalive/KeepAlive";
import QueueAnim from "rc-queue-anim";
type MenuItem = Required<MenuProps>['items'][number];
const { Sider, Content } = Layout;
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    }
}
function renderMenu(Routes: RouteItem[], rootUrl: string): MenuItem[] {
    let MenuItemArr = []
    for (let index = 0; index < Routes.length; index++) {
        const item = Routes[index];
        let key = item.path ? rootUrl + "/" + item.path : rootUrl
        if (!item.index) {
            if (item.children) {
                MenuItemArr.push(getItem(item.meta?.menu, key, item.meta?.icon && <SvgIcon iconClass={item.meta.icon} />, renderMenu(item.children, key)))
            } else {
                MenuItemArr.push(getItem(<Link to={key}>{item.meta?.menu}</Link>, key, item.meta?.icon && <SvgIcon iconClass={item.meta.icon} />))
            }
        }
    }
    return MenuItemArr

}
let Menus = renderMenu(adminRoutes, '/admin')
function AdminLayout() {
    const Location = useLocation()
    const Outlet = useOutlet()
    const { pathname } = Location
    const [collapsed, setCollapsed] = useState(false)
    const showTagsView = useSelector((store: Redux.Store) => store.admin.showTagsView)
    const showLogo = useSelector((store: Redux.Store) => store.admin.showLogo)
    const fixHeader = useSelector((store: Redux.Store) => store.admin.fixHeader)
    return (
        <Layout className={style.layout}>
            <Sider trigger={null} collapsible collapsed={collapsed} className={style.sider}>
                <Scrollbars>
                    {showLogo && <div className="logo" style={{ textAlign: "center" }}>
                        <img src={logo} alt="logo" style={{ width: 80 }} />
                    </div>}
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={[pathname]}
                        defaultOpenKeys={[pathname.split("/").splice(0, pathname.split("/").length - 1).join("/")]}
                        items={Menus}
                    />
                </Scrollbars>
            </Sider>
            <Layout className={style.container} style={{ marginLeft: collapsed ? 80 : 200 }}>
                {fixHeader ? <Affix offsetTop={0}>
                    <div>
                        <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} />
                        {showTagsView ? <TagView /> : ''}
                    </div>
                </Affix> : <div>
                    <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} />
                    {showTagsView ? <TagView /> : ''}
                </div>}
                <Content
                    key={1}
                    className={style.layoutBackground}
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <ErrorBoundary history={Location}>
                        <KeepAlive include={['/admin/zip', '/admin/clipboard']}>
                            <QueueAnim style={{ height: '100%' }}>
                                <div key={1}>
                                    {Outlet}
                                </div>
                            </QueueAnim>
                        </KeepAlive>
                    </ErrorBoundary>
                </Content>
            </Layout>
            <System />
        </Layout >
    )
}
export default memo(AdminLayout, () => false)