import React from "react";
import BoardIcons from "../boardIcons/BoardIcons";
import BoardInfo from "../boardInfo/BoardInfo";
import s from "./Board.module.css";

const Board = () => (
  <div className={s.container}>
    <div className={s.item}>
      <div className={s.borderName}>Board name</div>
    </div>
    <div className={s.itemIcons}>
      <BoardIcons />
    </div>
    <div className={s.item}>
      <BoardInfo />
    </div>
  </div>
);

export default Board;