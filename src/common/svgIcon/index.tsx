/*
 * @LastEditors: night
 * @Author: night
 */

import styles from "./index.module.less"; //已启用 CSS Modules
import "../../common/svgIcon/index"
export default function SvgIcon(props: SvgIcon) {
    const { iconClass, fill = 'currentColor',style } = props;
    return (
        <i aria-hidden="true" className="anticon">
            <svg className={styles["svg-class"]} style={style}>
                <use xlinkHref={"#" + iconClass} fill={fill} />
            </svg>
        </i>
    );
};

