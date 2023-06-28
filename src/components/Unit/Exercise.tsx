import * as React from "react";

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
  return (
    <div>
      <h2>{exercise.title}</h2>
      <p className="question_container">{exercise.question}</p>
      <div className="multiple_choice__container">
        {exercise.answers.map((answer, index) => {
          return (
            <div
              key={index}
              className="option"
              onClick={() => selectAnswerHandler(answer.valid)}
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
