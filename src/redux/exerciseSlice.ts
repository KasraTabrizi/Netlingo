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
        title: "Fill in the blank",
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
        question: "Tu comes pan?",
        answers: [
          {
            option: "Do you eat bread?",
            valid: true,
          },
          {
            option: "Does he eat bread?",
            valid: false,
          },
          {
            option: "You are eating bread.",
            valid: false,
          },
        ],
      },
      {
        title: "Fill in the blanks",
        question: "Yo ... agua. Tú ... leche",
        answers: [
          {
            option: "bebe / bebes",
            valid: false,
          },
          {
            option: "bebes / bebo",
            valid: false,
          },
          {
            option: "bebo / bebes",
            valid: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    list: [
      {
        title: "Fill in the blank",
        question: "Yo tengo una reserva en el ...",
        answers: [
          {
            option: "pan",
            valid: false,
          },
          {
            option: "hotel",
            valid: true,
          },
          {
            option: "coche",
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
