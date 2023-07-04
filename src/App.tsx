import * as React from "react";
import "./styles/app.css";
import { Context } from "./context";
import SideNavBar from "./components/SideNavBar";
import { Outlet } from "react-router-dom";
import lessonImage from "./assets/two-people-talking.jpg";
import lessonImage2 from "./assets/tapas-and-beer.jpg";

const units = [
  {
    id: 1,
    title: "Unit 1",
    description: "Form basic sentences, greet people",
    enabled: true,
    finished: false,
    lessons: [
      {
        id: 1,
        title: "Lesson 1",
        description: "Introduce yourself!",
        avatar: lessonImage,
        enabled: true,
        finished: false,
      },
      {
        id: 2,
        title: "Lesson 2",
        description: "Order food and drinks",
        avatar: lessonImage2,
        enabled: false,
        finished: false,
      },
    ],
  },
  {
    id: 2,
    title: "Unit 2",
    description: "Get around the city",
    enabled: false,
    finished: false,
    lessons: [
      {
        id: 1,
        title: "Lesson 1",
        description: "Introduce yourself!",
        avatar: lessonImage,
        enabled: false,
        finished: false,
      },
    ],
  },
];

const App = () => {
  return (
    <Context.Provider value={units}>
      <SideNavBar />
      <div id="detail">
        <Outlet />
      </div>
    </Context.Provider>
  );
};

export default App;
