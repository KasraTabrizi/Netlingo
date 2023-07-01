import * as React from "react";
import type { RootState } from "../redux/store";
import Unit from "../components/Unit/Unit";
import { useSelector, useDispatch } from "react-redux";
import { enableUnit } from "../redux/unitSlice";

const Learn = () => {
  const units = useSelector((state: RootState) => state.unit);
  const dispatch = useDispatch();
  console.log(units);
  return (
    <div id="learn__container">
      {units.map((unit: any) => {
        return (
          <>
            <Unit key={unit.id} unit={unit} />
            <button onClick={() => dispatch(enableUnit(unit.id))}>
              enable next unit
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Learn;
