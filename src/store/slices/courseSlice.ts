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
    setInitialCourses: (state, action: PayloadAction<{courses: CourseType[]}>) => {
      state.courses = action.payload.courses;
     
      console.log(state.courses, "Hiii!");

    },
    setChosenCourse: (
      state,
      action: PayloadAction<{
        courses: CourseType[];
        course: CourseType;
        isChosenCourse: boolean;
      }>
    ) => {
      state.chosenCourse = action.payload.course;
      const courses = state.courses;
      const foundCourse = courses.find(
        (course) =>
         { console.log(foundCourse, "Hiii!");
        return  course._id === state.chosenCourse?._id}
      );

      console.log(foundCourse, "Hiii!");

      const newChosenCourse = foundCourse;
      if (newChosenCourse) {
        state.chosenCourse = newChosenCourse;
      } else {
        state.chosenCourse = courses[0];
      };
      state.isChosenCourse = true;
    },
    
  },
});

export const { setChosenCourse, setInitialCourses } = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
