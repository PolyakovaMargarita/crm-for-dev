import React from "react";
import AplicationItems from "../aplicationItems/AplicationItems";
import s from "./AplicationNav.module.css";

const AplicationNav = () => (
  <div className={s.container}>
    <h1 className={s.header}>
      Aplications
    </h1>
    <div className={s.seeAll}>
      See All
    </div>
    <div className={s.items}>
      <AplicationItems />
    </div>
  </div>
);

export default AplicationNav;