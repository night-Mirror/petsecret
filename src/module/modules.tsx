/*
 * @Description: 公司业务包含浏览器扩展 所以再次聚合渲染到非根节点的模块
 * @LastEditors: night
 * @Author: night
 */
import portalModules from "."
let tsx: any[] = []
for (const key in portalModules) {
    if (Object.prototype.hasOwnProperty.call(portalModules, key)) {
        const element = portalModules[key];
        tsx.push(element)
    }
}
export default function ModulesTsx() {
    return (
        <div>{tsx.map((Item, index) => <Item key={index} />)}</div>
    )
}