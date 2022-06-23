/*
 * @Description:
 * @LastEditors: night
 * @Author: night
 */
import SvgIcon from "@/components/svgIcon";
import { Button, Avatar, Badge, Input, Space, Menu, Dropdown } from "antd";
import style from "./Header.module.less";
import type { MenuProps } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "@/assets/images/avatar.gif";
type MenuItem = Required<MenuProps>["items"][number];
const items: MenuProps["items"] = [
  {
    label: "图片&视频",
    key: "home",
  },
  {
    label: "宠物&类目",
    key: "Categories",
  },

  {
    label: "宠物&食物",
    key: "SubMenu",
  },
  {
    label: "宠物&玩具",
    key: "toys",
  },
  {
    label: "宠物&医生",
    key: "doctor",
  },
  {
    label: "宠物&训练",
    key: "train",
  },
  {
    label: "宠物&百科",
    key: "Q&A",
  },
];
let avatarMenus: MenuItem[] = [
  {
    label: <Link to={"profile"}>个人中心</Link>,
    key: "profile",
  },
  {
    label: <Link to={""}>收藏</Link>,
    key: "admin",
  },
  {
    label: <Link to={"github"}>消息</Link>,
    key: "github",
  },
  {
    label: <Link to={"documentation"}>我的上传</Link>,
    key: "documentation",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"loginOut"}>退出登录</Link>,
    key: "loginOut",
  },
];
export default function Header() {
  const [current, setCurrent] = useState("");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <header className={style.header}>
      <div className={style.left}>
        <a href="/">
          <SvgIcon iconClass="logo" className="logo" />
        </a>
        <div className={style.menu}>
          <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </div>
      </div>
      <div className={style.right}>
        <Space size="middle">
          <Dropdown
            placement="bottom"
            arrow
            overlay={<Menu items={avatarMenus}></Menu>}
          >
            <Badge count={1}>
              <Avatar
                icon={<img src={avatar} />}
                style={{ cursor: "pointer" }}
              />
            </Badge>
          </Dropdown>
          <Button type="primary" size="middle" shape="round">
            登录
          </Button>
          <Button type="primary" size="middle" danger>
            上传
          </Button>
        </Space>
      </div>
    </header>
  );
}