import "./RealDecide.css";

import React from "react";
import Value from "./Value";

export default function Todolist({ values }) {
  console.log({ values });
  return (
    <ul className="RealDecide">
      {values.map((value) => (
        <Value key={value} value={value} />
      ))}
    </ul>
  );
}