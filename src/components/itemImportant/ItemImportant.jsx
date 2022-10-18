import React from "react";
import s from "./ItemImportant.module.css";

export const ItemImportant = ({ number, text }) => (
  <div className={s.wrapper}>
    <div className={s.num}>{number}</div>
    <div className={s.text}>{text}</div>
  </div>
);
