import React from "react";
import BoardItems from "../boardItems/BoardItems";
import s from "./BoardInfo.module.css";

const BoardInfo = () => (
  <div className={s.container}>
    <div className={s.borderInfoName}>
      <div>
        <input type="checkbox" />
      </div>
      <div className={s.item}>name 1</div>
      <div className={s.item}>name 2</div>
      <div className={s.item}>name 3</div>
      <div className={s.item}>name 4</div>
    </div>
    <div className={s.borderInfoBody}>
      <BoardItems />
    </div>
  </div>
);

export default BoardInfo;