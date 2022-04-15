/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import actions from '@/redux/actions';
import { Menu, Dropdown, Affix, Button, } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import SvgIcon from '../svgIcon';
import style from "./header.module.less"
import { useImmer } from "use-immer";
import {
    SettingOutlined,
} from '@ant-design/icons';
import { SketchPicker } from 'react-color';
const { SubMenu } = Menu;
const navList = [
    {
        title: "keyword_sprite",
        list: [
            {
                url: "/keyword-miner/dynamic",
                text: "keyword_mining",
            },
            {
                url: "/keyword-research",
                text: "keyword_research",
            },
            {
                url: "/keyword-research-weekly",
                text: "keyword_trend_research",
                // sup: "new",
            },
            {
                url: "/keyword-reverse",
                text: "reverse_ASIN",
            },
            {
                url: "/aba/reverse/search",
                text: "reverse_keyword",
                only: ["cn"],
                sup: "2.0",
            },
            {
                url: "/keyword-checker",
                text: "keyword_checker",
            },
        ],
    },
    {
        title: "product_sprite",
        list: [
            {
                url: "/competitor-lookup",
                text: "competitor_lookup",
            },
            {
                url: "/product-research",
                text: "product_research",
            },
            {
                url: "/market-research",
                text: "market_research",
                // tips: "(做精品必备)",
            },
            {
                url: "/review-analysis",
                text: "review_analysis",
                sup: "new",
            },
            {
                url: "/reversing",
                text: "reversing",
                sup: "2.0",
                only: ["cn", "jp"],
            },
            {
                url: "/store-tracking",
                text: "shop_tracking",
                only: ["cn"],
            },
        ],
    },
    {
        title: "tracking_sprite",
        list: [
            {
                url: "/product-tracking",
                text: "product_tracker",
            },
            {
                url: "/product-tracking",
                text: "keyword_tracker",
                only: ["cn", "jp"],
            },

            {
                url: "/store-tracking",
                text: "shop_tracking",
            },
            {
                url: "https://www.sellerspace.com/cn/help/listing-hijack-alert",
                text: "main_fllow_tracker",
                only: ["cn"],
            },
        ],
    },
    {
        title: "free_tool",
        list: [
            {
                url: "/tools/fba-calculator",
                text: "profitability_calculator",
            },
            {
                url: "/tools/sales-estimator",
                text: "sales_estimation",
            },
            {
                url: "/keyword-checker",
                text: "keyword_checker",
            },
            {
                url: "/blog/google-trends-for-sellersprite",
                text: "google_trends",
            },
            {
                url: "/help/chrome-guide",
                text: "the_copy_of_keepa",
            },
        ],
    },
]
function Header(params: any) {
    const [data, setData] = useImmer({
        key: 'keyword_sprite'
    })
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation();
    const primaryColor = useSelector((store: Redux.Store) => store.app.primaryColor)
    function handleClick(e: { key: string; }) {
        setData((draft) => { draft.key = e.key });
    };
    function changeLanguage(params: { key: string | undefined; }) {
        i18n.changeLanguage(params.key)
        dispatch(actions.appSetLang(
            {
                lang: params.key
            }
        ))
    }
    function onColorChange(nextColor: { primaryColor: string; }) {
        dispatch(actions.appSetPrimaryColor(
            {
                primaryColor: nextColor.primaryColor
            }
        ))
        // setColor(mergedNextColor);
        // ConfigProvider.config({
        //     theme: mergedNextColor,
        // });
    }
    const menu = (
        <Menu onClick={changeLanguage}>
            <Menu.Item key="cn">
                <span> <SvgIcon iconClass='cn'></SvgIcon>中文</span>
            </Menu.Item>
            <Menu.Item key="en">
                <span> <SvgIcon iconClass='us'></SvgIcon>English</span>
            </Menu.Item>
            <Menu.Item key="jp">
                <span> <SvgIcon iconClass='jp'></SvgIcon>日语</span>
            </Menu.Item>
        </Menu>
    );
    return (
        <header className={style.header}>
            <Dropdown overlay={menu} >
                <span> <SvgIcon iconClass='cn'></SvgIcon>中文</span>
            </Dropdown>
            <div className={style.menu}>
                <Menu onClick={handleClick} selectedKeys={[data.key]} mode="horizontal">
                    {navList.map(item => {
                        return (
                            <SubMenu key={item.title} title={t(item.title)} >
                                {item.list.map((value, index) => {
                                    return (
                                        <Menu.Item key={item.title + index} >
                                            <a href={value.url} target="_blank">{t(value.text)}</a>
                                        </Menu.Item>
                                    )
                                })}
                            </SubMenu>
                        )
                    })}
                </Menu>
            </div>
            <div>
                <Button type='primary' icon={<SettingOutlined />}></Button>
                <SketchPicker
                    presetColors={['#1890ff', '#25b864', '#ff6f00']}
                    color={primaryColor}
                    onChange={({ hex }) => {
                        onColorChange({
                            primaryColor: hex,
                        });
                    }}
                />
            </div>

        </header>
    )

}
export default Header