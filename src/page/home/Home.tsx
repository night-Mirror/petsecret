import { useHistory } from "@/hooks/utils";
import { Outlet, useSearchParams, useNavigate, Link } from "react-router-dom";

/*
 * @LastEditors: night
 * @Author: night
 */

export default function Home() {
    const [searchParams, setSearchParams] = useSearchParams()
    const History = useHistory()
    const Navigate = useNavigate()

    const click = () => {
        // Navigate('/login', { state: { query: 132 } })
        History('/login', { state: { query: 132 },query:{
            asin:"132",
            marketid:"&addas"
        } })
      

    }
    return (
        <div style={{ display: "flex" }} onClick={click}>
            home
            <Outlet />
        </div>
    );
}