/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
import ReactDOM from 'react-dom'
import { equals, isNil, map, filter, not } from 'ramda'
import { useUpdate } from 'ahooks'
import {
    JSXElementConstructor,
    memo,
    ReactElement,
    RefObject,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    forwardRef,
    LegacyRef,
    createContext,

} from 'react'
import { useLocation } from 'react-router'
type Children = ReactElement<any, string | JSXElementConstructor<any>> | null
const KeepAliveContext = createContext<Children[]>([])
interface Props {
    activeName?: string
    include?: Array<string>
    exclude?: Array<string>
    maxLen?: number
    children: Children
}
function KeepAlive({ children, exclude, include, maxLen = 5 }: Props,) {
    const containerRef = useRef<HTMLDivElement>(null)
    const components = useRef<Array<{ name: string; ele: Children }>>([])
    const { pathname } = useLocation()

    //如果没有配置include，exclude 则不缓存
    if (isNil(exclude) && isNil(include)) {
        components.current = [
            {
                name: pathname,
                ele: children,
            }
        ]
    } else {
        // 缓存超过上限的 干掉第一个缓存
        if (components.current.length >= maxLen) {
            components.current = components.current.slice(1)
        }
        components.current = filter(({ name }) => {
            if (exclude && exclude.includes(name)) {
                return false
            }
            if (include) {
                return include.includes(name)
            }
            return true
        }, components.current)
        const component = components.current.find((res) => equals(res.name, pathname))
        if (isNil(component)) {
            components.current = [
                ...components.current,
                {
                    name: pathname,
                    ele: children,
                },
            ]
        }
    }
    return (
        <>
            <div ref={containerRef} className="keep-alive" key={1} />
            {map(
                ({ name, ele }) => (
                    <Component active={equals(name, pathname)} renderDiv={containerRef} name={name} key={name} >
                        {ele}
                    </Component>
                ),
                components.current
            )}
        </>
    )
}
export default memo(KeepAlive)
interface ComponentProps {
    active: boolean
    children: Children
    name: string
    renderDiv: RefObject<HTMLDivElement>
}
// 渲染 当前匹配的路由 不匹配的 利用createPortal 移动到 document.createElement('div') 里面
function Component({ active, children, name, renderDiv }: ComponentProps) {
    const [targetElement] = useState(() => document.createElement('div'))
    const activatedRef = useRef(false)
    activatedRef.current = activatedRef.current || active
    useEffect(() => {
        if (active) {// 渲染匹配的组件
            renderDiv.current?.appendChild(targetElement)
        } else {
            try { // 移除不渲染的组件
                renderDiv.current?.removeChild(targetElement)
            } catch (e) { }
        }
    }, [active, name, renderDiv, targetElement])
    useEffect(() => {// 添加一个id 作为标识 并没有什么太多作用 
        targetElement.setAttribute('id', name)
    }, [name, targetElement])
    // 把vnode 渲染到document.createElement('div') 里面
    return <>{activatedRef.current && ReactDOM.createPortal(children, targetElement)}</>
}
export const KeepAliveComponent = memo(Component)
