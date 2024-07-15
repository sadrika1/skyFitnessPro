import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { courseReducer } from './slices/courseSlice';

export const store = () => {
    return configureStore({
    reducer: combineReducers({
        user: userReducer,
        course: courseReducer,
    }),
});
};
// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];


