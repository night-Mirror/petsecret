/*
 * @LastEditors: night
 * @Author: night
 */
import actions from "@/redux/actions"
import avatar from "@/assets/images/avatar.gif"
import style from "./layout.module.less"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useLocation } from "react-router-dom"
import { useMemo, memo, useState, useEffect } from "react"
import { Avatar, Breadcrumb, Layout, Menu, MenuProps, Space, Dropdown, Switch, Drawer, } from 'antd';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';
import React from "react"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SettingOutlined,
    SkinFilled
} from '@ant-design/icons';
import SvgIcon from "@/common/svgIcon"
import adminRoutes from "@/route/admin"
import classNames from "classnames"
import { SketchPicker } from 'react-color';
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
function itemRender(route: any, params: any, routes: string | any[], paths: any[]) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
        <span>{route.breadcrumbName}</span>
    ) : (
        <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    );
}
let Menus = renderMenu(adminRoutes, '/admin')
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

function AdminLayout() {
    const { pathname } = useLocation()
    const [collapsed, setCollapsed] = useState(false)
    const [visible, setVisible] = useState(false)
    const [colorPicker, setColorPicker] = useState(false)
    const primaryColor = useSelector((store: Redux.Store) => store.app.primaryColor)
    const dispatch = useDispatch()
    function onColorChange(nextColor: { primaryColor: string; }) {
        dispatch(actions.appSetPrimaryColor(
            {
                primaryColor: nextColor.primaryColor
            }
        ))
    }
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
        <Layout className={style.layout}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                {/* <div className="logo" style={{ textAlign: "center" }}>
                    <img src={favicon} alt="logo" />
                </div> */}
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[pathname]}
                    defaultOpenKeys={[pathname.split("/").splice(0, pathname.split("/").length - 1).join("/")]}
                    items={Menus}
                />
            </Sider>
            <Layout className="site-layout">
                <Header className={classNames("site-layout-background", style.header)} style={{ paddingLeft: 16, fontSize: 18 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <Breadcrumb itemRender={itemRender} routes={routes} className={style.breadCrumb} />
                    <Space className={style.right} size={15} align="center">
                        <SvgIcon iconClass='search' style={{ fontSize: 18 }} />
                        <SvgIcon iconClass='fullscreen' style={{ fontSize: 18 }} />
                        <SvgIcon iconClass='size' style={{ fontSize: 18 }} />
                        <SvgIcon iconClass='language' style={{ fontSize: 18 }} />
                        <Dropdown placement="bottom" arrow overlay={<Menu items={avatarMenus}></Menu>}>
                            <Avatar icon={<img src={avatar} />} size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 40, xxl: 40 }} />
                        </Dropdown>

                    </Space>
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
            <Drawer
                title="系统布局配置"
                placement="right"
                closable={false}
                onClose={() => setVisible(!visible)}
                visible={visible}
                getContainer={false}
                forceRender
                width="260"

            >
                <p className={style.theme}>主题色 <SkinFilled style={{ color: primaryColor, cursor: "pointer", flex: 1, textAlign: "right" }} onClick={() => setColorPicker(!colorPicker)} />
                    <div style={{ display: colorPicker ? 'block' : 'none' }}>
                        <SketchPicker
                            presetColors={['#1890ff', '#25b864', '#ff6f00']}
                            className={style.sketchPicker}
                            color={primaryColor}
                            onChange={({ hex }) => {
                                onColorChange({
                                    primaryColor: hex,
                                });
                            }}
                        />
                    </div>
                </p>
                <p><span>开启 Tags-View</span><Switch size="small" /></p>
                <p><span>固定 Header</span><Switch size="small" /></p>
                <p><span>固定 Header</span><Switch size="small" /></p>
                <p><span>侧边栏 Logo</span><Switch size="small" /></p>
                <div className="handle-button" onClick={() => setVisible(!visible)}><SettingOutlined /></div>
            </Drawer>
        </Layout>

    )
}
export default memo(AdminLayout)