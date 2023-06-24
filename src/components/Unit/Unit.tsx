import * as React from "react";

interface UnitProps {
  name: string;
  color: string;
  number: Number;
  lessons: Number;
}

const Unit = ({ name, color, number, lessons }: UnitProps) => {
  return <div>Unit</div>;
};

export default Unit;
