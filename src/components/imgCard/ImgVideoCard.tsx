/*
 * @LastEditors: night
 * @Author: night
 */

import style from "./index.module.less";
import avatar from "@/assets/images/avatar.gif";
import { Avatar, Space } from "antd";
import {
  HeartOutlined,
  EyeOutlined,
  HeartFilled,
  FolderAddFilled,
  PlaySquareFilled,
  PictureFilled,
} from "@ant-design/icons";
import { useRef } from "react";
export default function ImgVideoCard(props: { video?: string; img?: string }) {
  const { video, img } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  function onMouseEnter() {
    videoRef.current?.play();
  }
  function onMouseLeave() {
    videoRef.current?.pause();
  }
  return (
    <div className={style.imgVideo}>
      <div className={style.content}>
        <div className={style.tag}>
          {video ? <PlaySquareFilled /> : <PictureFilled />}
        </div>
        {video ? (
          <video
            src={video}
            className={style.video}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            loop
            muted
            ref={videoRef}
          ></video>
        ) : (
          <img src={img} alt="" />
        )}

        <div className={style.back}>
          <span className={style.name}>
            Sales Management Mobile App - Salmage
          </span>
          <Space className={style.collect}>
            <FolderAddFilled style={{ fontSize: 24 }} />
            <HeartFilled style={{ fontSize: 24 }} />
          </Space>
        </div>
      </div>
      <div className={style.footer}>
        <Space>
          <Avatar icon={<img src={avatar} />} style={{ cursor: "pointer" }} />
          Sans Brothers
        </Space>
        <Space>
          <span>
            <HeartOutlined />
            12
          </span>
          <span>
            <EyeOutlined />
            34
          </span>
        </Space>
      </div>
    </div>
  );
}
