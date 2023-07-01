import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import lessonImage from "../assets/two-people-talking.jpg";
import lessonImage2 from "../assets/tapas-and-beer.jpg";

type TodoId = {
  id: number;
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
  name: "unit",
  initialState,
  reducers: {
    enableUnit: (state, action: PayloadAction<TodoId>) => {
      state.map((unit: any) => {
        if (unit.enabled || unit.id === action.payload) {
          return (unit.enabled = true);
        }
        return (unit.enabled = false);
      });
    },
  },
});

export const { enableUnit } = unitSlice.actions;

export default unitSlice.reducer;
