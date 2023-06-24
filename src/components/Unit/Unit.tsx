import * as React from "react";
import "../../styles/unit.css";
import LessonModule from "./LessonModule";

const Unit = () => {
  return (
    <div id="unit__container">
      <div className="unit__header">
        <h2>Unit 1</h2>
        <h3>Caption</h3>
      </div>
      <div className="lessons__container">
        <LessonModule />
        <LessonModule />
      </div>
    </div>
  );
};

export default Unit;
