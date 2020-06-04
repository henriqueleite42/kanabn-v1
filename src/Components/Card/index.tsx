import React from "react";

import { Card as ICard } from "Interfaces/Card";

import style from "./style.module.scss";

interface Props extends ICard {
  index: number;
}

const Card: React.FC<Props> = ({ text }) => {
  return (
    <div className={style["container"]}>
      <p>{text}</p>
    </div>
  );
};

export default Card;
