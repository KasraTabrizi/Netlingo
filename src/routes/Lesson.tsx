import * as React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Exercise from "../components/Unit/Exercise";
import { useSelector, useDispatch } from "react-redux";
import { updateLesson } from "../redux/unitSlice";
import type { RootState } from "../redux/store";
import "../styles/lesson.css";

const Lesson = () => {
  const navigate = useNavigate();
  const units = useSelector((state: RootState) => state.units);
  const dispatch = useDispatch();
  const { unitId, lessonId } = useParams();
  const [listIndex, setListIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const filterExerciseById = units[Number(unitId) - 1].lessons.filter(
    (lesson: any) => lesson.id === Number(lessonId)
  )[0].exercises;

  const progressIncrement = 100 / filterExerciseById.length;

  const setSelectedAnswer = (valid: boolean) => {
    setListIndex(listIndex + 1);
    setProgress(progress + progressIncrement);
  };

  useEffect(() => {
    if (listIndex === filterExerciseById.length) {
      //update current lesson that got finished
      dispatch(
        updateLesson({
          unitId: Number(unitId),
          lessonId: Number(lessonId),
          lessonState: "finished",
        })
      );
      //enable next lesson if there is one
      dispatch(
        updateLesson({
          unitId: Number(unitId),
          lessonId: Number(lessonId) + 1,
          lessonState: "enabled",
        })
      );
    }
  });

  return (
    <div className="lesson__container">
      <ProgressBar progress={progress} />
      {listIndex === filterExerciseById.length ? (
        <div className="lesson_finished__container">
          <h2>Good job!</h2>
          <div className="buttons__container">
            <button className="exit__button" onClick={() => navigate(-1)}>
              Exit
            </button>
          </div>
        </div>
      ) : (
        <Exercise
          exercise={filterExerciseById[listIndex]}
          selectAnswerHandler={(valid: boolean) => setSelectedAnswer(valid)}
        />
      )}
    </div>
  );
};

export default Lesson;
