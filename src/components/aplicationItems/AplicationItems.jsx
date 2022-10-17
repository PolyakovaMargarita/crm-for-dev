import React from "react";
import s from "./AplicationItems.module.css";
import AplicationItem from "../aplicationItem/AplicationItem";

const AplicationItems = () => (
  <div className={s.wrapper}>
    <div className={s.item}>
      <AplicationItem />
    </div>
    <div className={s.item}>
      <AplicationItem />
    </div> 
    <div className={s.item}>
      <AplicationItem />
    </div> 
  </div>
);

export default AplicationItems;