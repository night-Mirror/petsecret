/*
 * @LastEditors: night
 * @Author: night
 */

import styles from "./index.module.less"; //已启用 CSS Modules
import "@/components/svgIcon/index"
import classNames from "classnames";

export default function SvgIcon(props: SvgIcon) {
    const { iconClass, fill = 'currentColor', style, className } = props;
    return (
        <i aria-hidden="true" className="anticon">
            <svg className={classNames(styles["svg-class"], className)} style={style}>
                <use xlinkHref={"#" + iconClass} fill={fill} />
            </svg>
        </i>
    );
};

