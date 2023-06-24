import * as React from "react";
import { NavLink } from "react-router-dom";
import lessonImage from "../../assets/two-people-talking.jpg";
import lessonImage2 from "../../assets/tapas-and-beer.jpg";
import CheckedIcon from "../../assets/checked.svg";
import "../../styles/lessonmodule.css";

const LessonModule = () => {
  const lesson = {
    title: "Lesson 1",
    description: "Introduce yourself!",
    avatar: { lessonImage },
    enabled: true,
    finished: false,
  };
  return (
    <div className="lesson_module__container">
      <div>
        <img src={lessonImage} alt="lesson" />
      </div>
      <div>
        <div className="heading">
          <h1>{lesson.title}</h1>
          {lesson.finished && <img src={CheckedIcon} alt="checked" />}
        </div>
        <p>{lesson.description}</p>
        <NavLink
          to={`lesson`}
          className={lesson.enabled ? "enabled" : "disabled"}
        >
          Start
        </NavLink>
      </div>
    </div>
  );
};

export default LessonModule;
