import * as React from "react";
import "../../styles/unit.css";
import lessonImage from "../../assets/two-people-talking.jpg";
import lessonImage2 from "../../assets/tapas-and-beer.jpg";
import LessonModule from "./LessonModule";

const lessons = [
  {
    id: 1,
    title: "Lesson 1",
    description: "Introduce yourself!",
    avatar: lessonImage,
    enabled: true,
    finished: false,
  },
  {
    id: 2,
    title: "Lesson 2",
    description: "Order food and drinks",
    avatar: lessonImage2,
    enabled: false,
    finished: false,
  },
];

const Unit = () => {
  return (
    <div id="unit__container">
      <div className="unit__header">
        <h2>Unit 1</h2>
        <h3>Introduction</h3>
      </div>
      <div className="lessons__container">
        {lessons.map((lesson, index) => {
          return <LessonModule key={index} lesson={lesson} />;
        })}
      </div>
    </div>
  );
};

export default Unit;
