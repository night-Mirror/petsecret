/*
 * @Description:
 * @LastEditors: night
 * @Author: night
 */
import ImgVideoCard from "@/components/imgCard/ImgVideoCard";
import style from "../Home.module.less";
import doberman from "@/assets/video/doberman.mp4";
import cat from "@/assets/images/cat.webp";
import Dog_hoilday from "@/assets/images/Dog_hoilday.webp";
import Dog_Jacket from "@/assets/images/Dog_Jacket.webp";
import Dog_Tricks from "@/assets/images/Dog_Tricks.webp";
export default function Content() {
  return (
    <ol className={style.content}>
      <li className={style.title}>Trending</li>
      <li className={style.videoli}>
        <ImgVideoCard video={doberman} />
      </li>
      <li>
        <ImgVideoCard img={cat} />
      </li>
      <li className={style.videoli}>
        <ImgVideoCard video={doberman} />
      </li>

      <li>
        <ImgVideoCard img={Dog_hoilday} />
      </li>
      <li>
        <ImgVideoCard img={Dog_Jacket} />
      </li>
      <li className={style.videoli}>
        <ImgVideoCard video={doberman} />
      </li>
      <li>
        <ImgVideoCard img={cat} />
      </li>
      <li>
        <ImgVideoCard img={Dog_Tricks} />
      </li>
      <li>
        <ImgVideoCard img={Dog_Tricks} />
      </li>
    </ol>
  );
}
