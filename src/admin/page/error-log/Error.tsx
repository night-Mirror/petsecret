/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */

import { useEffect } from "react"
export default function ErrorTest() {
    useEffect(() => {
        throw new Error("this is a ErrorTest");

    }, [])
    return (
        <div>
            Error
        </div>
    )
}