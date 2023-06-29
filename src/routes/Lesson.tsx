import * as React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Exercise from "../components/Unit/Exercise";

const exercises = [
  {
    id: "1",
    list: [
      {
        title: "Read and Translate",
        question: "Hola, yo soy Pedro. Como te llamas?",
        answers: [
          {
            option: "Hey, I am Pedro. How are you?",
            valid: false,
            selected: false,
          },
          {
            option: "Hey, I am Pedro. What is your name?",
            valid: true,
            selected: false,
          },
          {
            option: "Hey, I am Pedro. How old are you?",
            valid: false,
            selected: false,
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
            selected: false,
          },
          {
            option: "mujer",
            valid: true,
            selected: false,
          },
          {
            option: "gato",
            valid: false,
            selected: false,
          },
        ],
      },
    ],
  },
];

const Lesson = () => {
  const { lessonId } = useParams();
  const [listIndex, setListIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [progress, setProgress] = useState(0);

  const filterExerciseById = exercises.filter(
    (exercise) => exercise.id === lessonId
  )[0].list;

  const progressIncrement = 100 / filterExerciseById.length;

  const checkAnswer = () => {
    if (selectedAnswer) {
      setListIndex(listIndex + 1);
      setProgress(progress + progressIncrement);
    }
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
        <button className="check_button" onClick={checkAnswer}>
          Check
        </button>
      </div>
    </div>
  );
};

export default Lesson;
