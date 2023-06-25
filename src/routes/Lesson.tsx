import * as React from "react";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Exercise from "../components/Unit/Exercise";

const Lesson = () => {
  const [exState, SetExState] = useState(0);

  return (
    <div className="lesson__container">
      <ProgressBar progress={10} />
      <Exercise />
      <div className="buttons__container">
        <button className="exit__button">Exit</button>
        <button className="check_button">Check</button>
      </div>
    </div>
  );
};

export default Lesson;
