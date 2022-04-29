import { useNavigate } from "react-router"

/*
 * @Description: 
 * @LastEditors: night
 * @Author: night
 */
export default function Mine() {
  const Navigate = useNavigate()
  console.log(3)
  return (
    <div onClick={() => Navigate('/', { state: { query: 132 } })}>Mine</div>
  )
}
