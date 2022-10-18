import React from "react";
import { ItemImportant } from "../itemImportant/ItemImportant";
import s from "./Important.module.css";
import classNames from "classnames";

const Important = () => (
  <div className={s.container}>
    <div className={s.important}>
      <div className={s.imortantText}>Important</div>
      <div className={s.imortantSeeAll}>
        See All
      </div>
      <div className={s.importantBody}>
        Something very important
      </div>
    </div>
    <div className={s.items}>
      <div className={s.imortantText}>file of site</div>
      <div className={classNames(s.imortantSeeAll, s.see)}>
        See All
      </div>
      <div className={s.importantBody}>
        <ItemImportant number="5" text="Files"/>
      </div>
      <div className={s.importantBody}>
        <ItemImportant number="6" text="Sites"/>
      </div>
      <div className={s.importantBody}>
        <ItemImportant number="9" text="Info"/>
      </div>
      <div className={s.importantBody}>
        <ItemImportant number="2" text="Need"/>
      </div>
    </div>
  </div>
);

export default Important;