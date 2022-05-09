/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import actions from "@/redux/actions"
import avatar from "@/assets/images/avatar.gif"
import style from "./Header.module.less"
import { Link, useLocation } from "react-router-dom"
import { useMemo, } from "react"
import { Avatar, Breadcrumb, Layout, Menu, Space, Dropdown, MenuProps, } from 'antd';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import React from "react"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import SvgIcon from "@/common/svgIcon"
import adminRoutes from "@/route/admin"
import classNames from "classnames"
import Texty from 'rc-texty';
const { Header } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
let avatarMenus: MenuItem[] = [{
    label: <Link to={"profile"}>个人中心</Link>,
    key: "profile",
}, {
    label: <Link to={""}>首页</Link>,
    key: "admin",
}, {
    label: <Link to={"github"}>项目地址</Link>,
    key: "github",
}, {
    label: <Link to={"documentation"}>文档</Link>,
    key: "documentation",
},
{
    type: 'divider',
},
{
    label: <Link to={"loginOut"}>退出登录</Link>,
    key: "loginOut",
},]
function itemRender(route: any, params: any, routes: string | any[], paths: any[]) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
        <span> <Texty type="left" mode="smooth">{route.breadcrumbName}</Texty></span>
    ) : (
        <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    );
}
export default function AdminHeader(props: { collapsed: boolean; setCollapsed: Function }) {
    const { collapsed, setCollapsed } = props
    const { pathname } = useLocation()
    let routes: Route[] = useMemo(() => {
        let pathnameArr = pathname.split("/").filter(i => i).slice(1)
        let Routes = adminRoutes
        let routes: Route[] = []
        if (pathnameArr[0] !== "dashboard") {
            routes.push({
                path: "/",
                breadcrumbName: "首页"
            })
        }
        while (pathnameArr.length > 0) {
            for (let index = 0; index < Routes.length; index++) {
                const element = Routes[index];
                if (element.path == pathnameArr[0]) {
                    pathnameArr.splice(0, 1)
                    Routes = element.children || []
                    if (element.children) {
                        routes.push({
                            path: element.path,
                            breadcrumbName: element.meta?.menu,
                            children: element.children.map((item: RouteItem) => {
                                return {
                                    path: item.path as string,
                                    breadcrumbName: item.meta?.menu as string,
                                }
                            })
                        })
                    } else {
                        routes.push({
                            path: element.path,
                            breadcrumbName: element.meta?.menu,
                        })
                    }
                    break
                }
            }
        }
        return routes
    }, [pathname])
    return (
        <Header className={classNames(style.layoutBackground, style.header)} style={{ paddingLeft: 16, fontSize: 18, }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                id: "hamburger-container",
                onClick: () => setCollapsed(!collapsed),
            })}
            <div id="breadcrumb-container" style={{ flex: 1 }}>
                <Breadcrumb itemRender={itemRender} routes={routes} className={style.breadCrumb} />
            </div>
            <Space className={style.right} size={15} align="center">
                <SvgIcon iconClass='search' style={{ fontSize: 18 }} />
                <SvgIcon iconClass='fullscreen' style={{ fontSize: 18 }} />
                <SvgIcon iconClass='size' style={{ fontSize: 18 }} />
                <SvgIcon iconClass='language' style={{ fontSize: 18 }} />
                <Dropdown placement="bottom" arrow overlay={<Menu items={avatarMenus}></Menu>} >
                    <Avatar icon={<img src={avatar} />} size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 }} style={{ cursor: "pointer" }} />
                </Dropdown>
            </Space>
        </Header>
    )
}