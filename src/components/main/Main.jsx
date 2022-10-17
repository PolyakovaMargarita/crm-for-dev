import React from "react";
import Important from "../important/Important";
import Information from "../information/Information";
import s from "./Main.module.css";

const Main = () => (
  <div className={s.content}>
    <div className={s.item1}>
      <Information />
    </div>
    <div className={s.item2}>
      <Important />
    </div>
  </div>
 
);

export default Main;