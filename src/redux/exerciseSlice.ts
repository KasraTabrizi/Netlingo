import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface ExerciseState {
  id: number;
  list: {
    title: string;
    question: string;
    answers: {
      option: string;
      valid: boolean;
    }[];
  }[];
}

const initialState: ExerciseState[] = [
  {
    id: 1,
    list: [
      {
        title: "Read and Translate",
        question: "Hola, yo soy Pedro. Como te llamas?",
        answers: [
          {
            option: "Hey, I am Pedro. How are you?",
            valid: false,
          },
          {
            option: "Hey, I am Pedro. What is your name?",
            valid: true,
          },
          {
            option: "Hey, I am Pedro. How old are you?",
            valid: false,
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
          },
          {
            option: "mujer",
            valid: true,
          },
          {
            option: "gato",
            valid: false,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    list: [
      {
        title: "Read and Translate",
        question: "Hola, yo soy Pedro. Como te llamas?",
        answers: [
          {
            option: "Hey, I am Pedro. How are you?",
            valid: false,
          },
          {
            option: "Hey, I am Pedro. What is your name?",
            valid: true,
          },
          {
            option: "Hey, I am Pedro. How old are you?",
            valid: false,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    list: [
      {
        title: "Read and Translate",
        question: "Hola, yo soy Pedro. Como te llamas?",
        answers: [
          {
            option: "Hey, I am Pedro. How are you?",
            valid: false,
          },
          {
            option: "Hey, I am Pedro. What is your name?",
            valid: true,
          },
          {
            option: "Hey, I am Pedro. How old are you?",
            valid: false,
          },
        ],
      },
    ],
  },
];

export const exerciseSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {},
});

export default exerciseSlice.reducer;
