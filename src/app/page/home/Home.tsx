
/*
 * @LastEditors: night
 * @Author: night
 */

import { useHistory } from "@/hooks/utils";
import { useState } from "react";
import { Outlet, useSearchParams, useNavigate, Link } from "react-router-dom";
export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [count, setCount] = useState(0)
    const Navigate = useNavigate()
    const click = () => {
        Navigate('/mine', { state: { query: 132 } })
    }
    console.log(2)
    return (
        <div  >
            <div onClick={click}> home</div>
            {/* <Outlet /> */}
        </div>
    );
}