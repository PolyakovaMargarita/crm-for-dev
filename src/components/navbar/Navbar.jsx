import React from "react";
import s from "./Navbar.module.css";

import i1 from "./../../images/icons/icon-pencil.png";
import i2 from "./../../images/icons/download__icon.ico";
import i3 from "./../../images/icons/icon-search.png";
import i4 from "./../../images/icons/icon-share.png";
import i5 from "./../../images/icons/icon_setting.ico";
import ava from "./../../images/ava2.jpg";

const icons = [
  {id: 1, icon: i1, text: "test"},
  {id: 2, icon: i2, text: "test"},
  {id: 3, icon: i3, text: "test"},
  {id: 4, icon: i4, text: "test"},
  {id: 5, icon: i5, text: "test"}
];

const Navbar = () => (
  <div className={s.navbar}>
    <div className={s.profile}>
      <img className={s.ava} src={ava} alt="ava"/>
      <div className={s.text}>SS</div>
    </div>
    <div className={s.nav_items}>
      <div className={s.nav_item}>
        {
          icons.map((item, index) => 
            <img className={s.icon} key={index} src={item.icon} alt="icon" />
          )}
      </div>
    </div> 
  </div>
);

export default Navbar;