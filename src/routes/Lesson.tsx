import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Exercise from "../components/Unit/Exercise";

const exercises = [
  {
    id: 1,
    list: [
      {
        title: "Read and Translate",
        question: "Hola, yo soy Pedro. Como te llamas?",
        answers: [
          {
            option: "Hey, I am Pedro. How are you?",
            valid: false,
          },
          {
            option: "Hey, I am Pedro. What is your name?",
            valid: true,
          },
          {
            option: "Hey, I am Pedro. How old are you?",
            valid: false,
          },
        ],
      },
      {
        title: "Select the missing word",
        question: "Soy Ana. Yo soy una ...",
        answers: [
          {
            option: "hombre",
            valid: false,
          },
          {
            option: "mujer",
            valid: true,
          },
          {
            option: "gato",
            valid: false,
          },
        ],
      },
    ],
  },
];

const Lesson = () => {
  const { lessonId } = useParams();
  const [listIndex, setListIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const filterExerciseById = exercises.filter(
    (exercise) => exercise.id === Number(lessonId)
  )[0].list;

  const progressIncrement = 100 / filterExerciseById.length;

  const setSelectedAnswer = (valid: boolean) => {
    setListIndex(listIndex + 1);
    setProgress(progress + progressIncrement);
  };

  return (
    <div className="lesson__container">
      <ProgressBar progress={progress} />
      {listIndex === filterExerciseById.length ? (
        <div>Finished</div>
      ) : (
        <Exercise
          exercise={filterExerciseById[listIndex]}
          selectAnswerHandler={(valid: boolean) => setSelectedAnswer(valid)}
        />
      )}
      <div className="buttons__container">
        <button className="exit__button">Exit</button>
      </div>
    </div>
  );
};

export default Lesson;
