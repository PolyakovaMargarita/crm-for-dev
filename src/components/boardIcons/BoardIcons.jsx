import React from "react";
import s from "./BoardIcons.module.css";

import iconDelete from "./../../images/icons/icon-delete.png";
import iconPensil from "./../../images/icons/icon-pencil.png";
import iconSearch from "./../../images/icons/icon-search.png";

const BoardIcons = () => (
  <div className={s.container}>
    <div className={s.icons}>
      <img className={s.icon} src={iconDelete} alt="delete"/>
    </div>
    <div className={s.icons}>
      <img className={s.icon} src={iconPensil} alt="delete"/>
    </div>
    <div className={s.icons}>
      <img className={s.icon} src={iconSearch} alt="search"/>
    </div>
  </div>
);

export default BoardIcons;