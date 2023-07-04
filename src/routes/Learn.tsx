import * as React from "react";
import Unit from "../components/Unit/Unit";
import { useContext } from "react";
import { Context } from "../context";

const Learn = () => {
  const units = useContext(Context);
  return (
    <div id="learn__container">
      {units.map((unit: any) => {
        return <Unit key={unit.id} unit={unit} />;
      })}
    </div>
  );
};

export default Learn;
