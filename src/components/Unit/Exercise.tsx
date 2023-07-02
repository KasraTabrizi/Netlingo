import * as React from "react";
import { useState } from "react";
import "../../styles/exercise.css";

interface ExerciseProps {
  exercise: {
    title: string;
    question: string;
    answers: {
      option: string;
      valid: boolean;
    }[];
  };
  selectAnswerHandler: (valid: boolean) => void;
}

const Exercise = ({ exercise, selectAnswerHandler }: ExerciseProps) => {
  const [selected, setSelected] = useState("");

  const checkAnswer = (answer: any) => {
    setSelected(answer.option);
    selectAnswerHandler(answer.valid);
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
              className={`option ${
                !answer.valid && selected === answer.option ? "error" : ""
              }`}
              onClick={() => checkAnswer(answer)}
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
