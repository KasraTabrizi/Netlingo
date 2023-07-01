import * as React from "react";
import "../../styles/unit.css";
import LessonModule from "./LessonModule";

interface UnitProps {
  unit: {
    id: Number;
    title: string;
    description: string;
    enabled: boolean;
    finished: boolean;
    lessons: {
      id: Number;
      title: string;
      description: string;
      avatar: string;
      enabled: boolean;
      finished: boolean;
    }[];
  };
}

const Unit = ({ unit }: UnitProps) => {
  return (
    <div id="unit__container">
      <div
        className={`unit__header ${!unit.enabled && "disable"} ${
          unit.finished && "finished"
        }`}
      >
        <h2>{unit.title}</h2>
        <h3>{unit.description}</h3>
      </div>
      <div className="lessons__container">
        {unit.lessons.map((lesson: any) => {
          return <LessonModule key={lesson.id} lesson={lesson} />;
        })}
      </div>
    </div>
  );
};

export default Unit;
