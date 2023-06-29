import * as React from "react";
import { useState, useEffect } from "react";
import "../../styles/exercise.css";

interface ExerciseProps {
  exercise: {
    title: string;
    question: string;
    answers: {
      option: string;
      valid: boolean;
      selected: boolean;
    }[];
  };
  selectAnswerHandler: (valid: boolean) => void;
}

const Exercise = ({ exercise, selectAnswerHandler }: ExerciseProps) => {
  const [exerciseObj, setExerciseObj] = useState(exercise);

  useEffect(() => {
    setExerciseObj({ ...exercise });
  }, [exercise]);

  const selectAnswer = (option: string) => {
    const answers = exerciseObj.answers.map((answer) => {
      if (answer.option === option) {
        answer.selected = true;
        selectAnswerHandler(answer.valid);
      } else {
        answer.selected = false;
      }
      return answer;
    });
    setExerciseObj({
      ...exerciseObj,
      answers,
    });
  };

  return (
    <div className="exercise__container">
      <h2>{exercise.title}</h2>
      <p className="question__container">{exercise.question}</p>
      <div className="multiple_choice__container">
        {exercise.answers.map((answer, index) => {
          return (
            <div
              key={index}
              className={`option ${answer.selected ? "active" : ""}`}
              onClick={() => selectAnswer(answer.option)}
            >
              {answer.option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exercise;
