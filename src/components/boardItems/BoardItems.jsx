import React from "react";
import BoardItem from "../boardItem/BoardItem";
import s from "./BoardItems.module.css";

const BoardItems = () => (
  <div className={s.container}>
    <div className={s.borderItem}>
      <BoardItem />
    </div>
    <div className={s.borderItem}>
      <BoardItem />
    </div>
    <div className={s.borderItem}>
      <BoardItem />
    </div>
    <div className={s.borderItem}>
      <BoardItem />
    </div>
    <div className={s.borderItem}>
      <BoardItem />
    </div>
    <div className={s.borderItem}>
      <BoardItem />
    </div>
    <div className={s.borderItem}>
      <BoardItem />
    </div>
    <div className={s.borderItem}>
      <BoardItem />
    </div>
    <div className={s.borderItem}>
      <BoardItem />
    </div>
    <div className={s.borderItem}>
      <BoardItem />
    </div>
  </div>
);

export default BoardItems;