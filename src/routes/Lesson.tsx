import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import Exercise from "../components/Unit/Exercise";
import { useSelector, useDispatch } from "react-redux";
import { updateLesson } from "../redux/unitSlice";
import type { RootState } from "../redux/store";

const Lesson = () => {
  const exercises = useSelector((state: RootState) => state.exercises);
  const dispatch = useDispatch();
  const { unitId, lessonId } = useParams();
  const [listIndex, setListIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const filterExerciseById = exercises.filter(
    (exercise: any) => exercise.id === Number(lessonId)
  )[0].list;

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
      //enable next lesson
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
