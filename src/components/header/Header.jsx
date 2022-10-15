import React from "react";
import s from "./Header.module.css";

const Header = () => (
  <div className={s.header}>
    <div className={s.items}>
      <span className={s.item}>SnowingSnake</span>
    </div>
  </div>
);

export default Header;