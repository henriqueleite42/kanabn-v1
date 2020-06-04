import React from "react";

import Card from "Components/Card";

import { Column as IColumn } from "Interfaces/Column";

import style from "./style.module.scss";

interface Props extends IColumn {
  index: number;
}

const Column: React.FC<Props> = ({ cards }) => {
  return (
    <div className={style["container"]}>
      {cards.map((card, index) => (
        <Card key={card.id} index={index} {...card} />
      ))}
    </div>
  );
};

export default Column;
