/*
 * @Description:
 * @LastEditors: night
 * @Author: night
 */
import SvgIcon from "@/components/svgIcon";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import style from "../Home.module.less";
const prefix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const { Search } = Input;
const onSearch = (value: string) => console.log(value);
const navItem = [
  {
    icon: "food",
    url: "/food",
    title: "Food & Diet",
  },
  {
    icon: "health",
    url: "/health",
    title: "Food & Diet",
  },
  {
    icon: "grooming",
    url: "/grooming",
    title: "Grooming & Care",
  },

  {
    icon: "toys",
    url: "/toys",
    title: "Toys & Accessories",
  },
  {
    icon: "furniture",
    url: "/furniture",
    title: "Beds, Pads & Furniture",
  },
  {
    icon: "carriers",
    url: "/carriers",
    title: "Doors, Crates & Carriers",
  },
];
export default function Top() {
  return (
    <div className={style.top}>
      <h1 className={style.title}>The coolest pet site on the planet</h1>
      <div style={{ textAlign: "center" }}>
        <Search
          placeholder="Search for products, advice, etc."
          enterButton="Search"
          size="large"
          prefix={prefix}
          bordered={false}
          onSearch={onSearch}
          className={style.search}
        />
      </div>
      <ul className={style.nav}>
        {navItem.map((item) => (
          <Link to={item.url} key={item.url}>
            <li>
              <SvgIcon iconClass={item.icon} />
              <p>{item.title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
