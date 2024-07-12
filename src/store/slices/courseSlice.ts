import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseType } from "../../types";

type CourseStateType = {
  courses: CourseType[];
  chosenCourse: CourseType | null;
  isChosenCourse: boolean;
};

const initialState: CourseStateType = {
  courses: [],
  chosenCourse: null,
  isChosenCourse: false,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setChosenCourse: (
      state,
      action: PayloadAction<{
        courses: CourseType[];
        course: CourseType;
        isChosenCourse: boolean;
      }>
    ) => {
      state.chosenCourse = action.payload.course;
      state.courses = action.payload.courses;
      const courses = state.courses;
      const chosenCourseIndex = courses.findIndex(
        (course) => course._id === state.chosenCourse?._id
      );
      const newChosenCourse = courses[chosenCourseIndex];
      if (newChosenCourse) {
        state.chosenCourse = newChosenCourse;
      } else {
        state.chosenCourse = courses[0];
      };
      state.isChosenCourse = true;
    },
    
  },
});

export const { setChosenCourse } = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
