import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/main/MainPage";
import { WorkoutVideoPage } from "./pages/workout/WorkoutVideoPage";
import { appRoutes } from "./route/appRoutes";
import ProtectedRoute from "./route/protectedRoute";
import ChosenCoursePage from "./pages/courses/ChosenCoursePage";
import { useState } from "react";
import { LoginModalContext } from './contexts';
import { ModalLogin } from "./components/modalItem/modal";
import Layout from "./components/layout/Layout";
import ProfilePage from "./pages/profilePage/ProfilePage";


export default function App() {
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);

  return (
    <LoginModalContext.Provider value={{ isLoginModalOpened, setIsLoginModalOpened }}>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<ProtectedRoute />}>
          <Route path={appRoutes.USER_PAGE} element={<ProfilePage />}></Route>
            <Route
              path={appRoutes.WORKOUT_VIDEO_PAGE}
              element={<WorkoutVideoPage />}
            ></Route>
          </Route>

          <Route
            path={appRoutes.COURSE_PAGE}
            element={<ChosenCoursePage />}
          ></Route>
          <Route path={appRoutes.MAIN} element={<MainPage />}></Route>
        </Route>
      </Routes>

      {isLoginModalOpened && <ModalLogin />}
    </LoginModalContext.Provider>
  );
}
