
import { useEffect } from "react"


export default function Documentation() {
    useEffect(() => {
        throw new Error("test");

    }, [])
    return (
        <div>木有文档哦</div>
    )
}