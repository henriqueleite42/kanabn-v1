import React, { useState, useEffect } from "react";

import Column from "Components/Column";

import { Column as IColumn } from "Interfaces/Column";

import style from "./style.module.scss";

const Home: React.FC = () => {
  const [columns, setColumns] = useState<Array<IColumn>>([]);

  useEffect(() => {
    setColumns([
      {
        id: "column-1",
        cards: [
          {
            id: "card-1",
            text: "aaa",
          },
        ],
      },
    ]);
  });

  return (
    <div className={style["container"]}>
      {columns.map((column, index) => (
        <Column key={column.id} index={index} {...column} />
      ))}
    </div>
  );
};

export default Home;
