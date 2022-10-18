import React from "react";
import s from "./BoardItem.module.css";

const BoardItem = () => (
  <form>
    <label className={s.container}>
      <div className={s.itemCheckbox}>
        <input type="checkbox" />
      </div>
      <div className={s.item}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className={s.item}>
        Lorem ipsum dolor
      </div>
      <div className={s.item}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className={s.item}>
        Lorem ipsum dolor sit amet consectetur
      </div>
      <hr />
    </label>
  </form>
);

export default BoardItem;