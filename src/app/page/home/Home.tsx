/*
 * @LastEditors: night
 * @Author: night
 */
import style from "./Home.module.less";
import Top from "./components/Top";
import Content from "./components/Content";

export default function Home() {
  return (
    <div className={style.home}>
      <Top />
      <Content />
    </div>
  );
}
