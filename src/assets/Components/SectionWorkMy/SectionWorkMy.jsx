import React from "react";
import "./SectionWorkMy.css";

export default function SectionWorkMy({ Text, Food, textClass, background }) {
  return (
    <div className={background}>
      <p className={textClass}>{Text}</p>
      <div>{Food}</div>
    </div>
  );
}
