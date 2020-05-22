import React from "react";
import "./Row.css";
import Cell from '../cell/Cell';

class Props {
  numCells: number;
}

export default function Row<Props>({numCells}) {
  return (
    <div className="playing-area__row">
      {[...Array(numCells)].fill(1).map(_ => (
        <Cell />
      ))}
    </div>
  );
}
