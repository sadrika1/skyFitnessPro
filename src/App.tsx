import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/main/MainPage";
import { WorkoutVideoPage } from "./pages/workout/WorkoutVideoPage";
import { appRoutes } from "./route/appRoutes";
import ProtectedRoute from "./route/protectedRoute";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Layout from "./components/layout/Layout";

import { useState } from "react";
import { LoginModalContext } from "./contexts";
import { ModalLogin } from "./components/modalItem/Modal";

export default function App() {
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);

  return (
    <LoginModalContext.Provider
      value={{ isLoginModalOpened, setIsLoginModalOpened }}
    >
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
            // element={<ChosenCoursePage />}
          ></Route>
          <Route path={appRoutes.MAIN} element={<MainPage />}></Route>
        </Route>
      </Routes>

      {isLoginModalOpened && <ModalLogin />}
    </LoginModalContext.Provider>
  );
}
