import React from "react";
import AplicationNav from "../aplicationNav/AplicationNav";
import Board from "../board/Board";
import s from "./Information.module.css";

const Information = () => (
  <div className={s.container}>
    <div className={s.appNav}>
      <AplicationNav />
    </div>
    <div className={s.appNav}>
      <Board />
    </div>
  </div>

);

export default Information;