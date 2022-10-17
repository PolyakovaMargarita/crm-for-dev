import React from "react";
import s from "./BoardInfo.module.css";

const BoardInfo = () => (
  <div className={s.container}>
    <div className={s.borderInfoName}>
      <div className={s.item}>Board name</div>
      <div className={s.item}>Board name</div>
      <div className={s.item}>Board name</div>
      <div className={s.item}>Board name</div>
    </div>
    <div className={s.borderInfoBady}>
      <div>Board information</div>
    </div>
  </div>
);

export default BoardInfo;