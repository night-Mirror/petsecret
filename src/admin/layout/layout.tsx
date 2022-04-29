/*
 * @LastEditors: night
 * @Author: night
 */
import actions from "@/redux/actions"
import favicon from "@/assets/images/favicon.ico"
import style from "./layout.module.less"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useLocation } from "react-router-dom"
import { useMemo, memo, useState, useEffect } from "react"
import { Layout, Menu, MenuProps, PageHeader } from 'antd';
import React from "react"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import SvgIcon from "@/common/svgIcon"
import adminRoutes from "@/route/admin"
import classNames from "classnames"
type MenuItem = Required<MenuProps>['items'][number];
const { Header, Sider, Content } = Layout;
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
    return Routes.map(item => {
        let key = item.path ? rootUrl + "/" + item.path : rootUrl
        if (item.children) {
            return getItem(item.meta?.menu, key, item.meta?.icon && <SvgIcon iconClass={item.meta.icon} />, renderMenu(item.children, key))
        } else {
            return getItem(<Link to={key}>{item.meta?.menu}</Link>, key, item.meta?.icon && <SvgIcon iconClass={item.meta.icon} />)
        }

    })
}

function AdminLayout() {
    const { pathname } = useLocation()
    let urls = pathname.split("/")
    console.log(urls)
    const [collapsed, setCollapsed] = useState(false)
    function toggle() {
        setCollapsed(!collapsed)
    };
    const routes = [
        {
            path: 'index',
            breadcrumbName: 'First-level Menu',
        },
        {
            path: 'first',
            breadcrumbName: 'Second-level Menu',
        },
        {
            path: 'second',
            breadcrumbName: 'Third-level Menu',
        },
    ];
    return (
        <Layout className={style.layout}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" style={{ textAlign: "center" }}>
                    <img src={favicon} alt="logo" />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[pathname]}
                    items={renderMenu(adminRoutes, '/admin')}
                />
            </Sider>
            <Layout className="site-layout">
                <Header className={classNames("site-layout-background", style.header)} style={{ paddingLeft: 16, fontSize: 18 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                    <PageHeader
                        className="site-page-header"
                        breadcrumb={{ routes }}
                    />
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>

    )
}
export default memo(AdminLayout)