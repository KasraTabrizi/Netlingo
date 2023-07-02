import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import lessonImage from "../assets/two-people-talking.jpg";
import lessonImage2 from "../assets/tapas-and-beer.jpg";

type UnitUpdate = {
  id: number;
  state: "enabled" | "finished";
};

type LessonUpdate = {
  unitId: number;
  lessonId: number;
  lessonState: "enabled" | "finished";
};

export interface UnitState {
  id: number;
  title: string;
  description: string;
  enabled: boolean;
  finished: boolean;
  lessons: {
    id: number;
    title: string;
    description: string;
    avatar: string;
    enabled: boolean;
    finished: boolean;
  }[];
}

const initialState: UnitState[] = [
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

export const unitSlice = createSlice({
  name: "units",
  initialState,
  reducers: {
    updateUnit: (state, action: PayloadAction<UnitUpdate>) => {
      state.map((unit: any) => {
        if (unit[`${action.payload.state}`] || unit.id === action.payload.id) {
          return (unit[`${action.payload.state}`] = true);
        }
        return (unit[`${action.payload.state}`] = false);
      });
    },
    updateLesson: (state, action: PayloadAction<LessonUpdate>) => {
      const unitIndex = state.findIndex(
        (unit) => unit.id === action.payload.unitId
      );
      state[unitIndex].lessons.map((lesson: any) => {
        if (
          lesson[`${action.payload.lessonState}`] ||
          lesson.id === action.payload.lessonId
        ) {
          return (lesson[`${action.payload.lessonState}`] = true);
        } else {
          return (lesson[`${action.payload.lessonState}`] = false);
        }
      });
    },
  },
});

export const { updateUnit, updateLesson } = unitSlice.actions;

export default unitSlice.reducer;
