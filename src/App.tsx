import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import { WorkoutVideoPage } from "./pages/WorkoutVideoPage/WorkoutVideoPage";
import { appRoutes } from "./route/appRoutes";
import ProtectedRoute from "./route/protectedRoute";
import ProfilePage from "./pages/profilePage/ProfilePage";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<ProtectedRoute />}>
          <Route path={appRoutes.USER_PAGE} element={<ProfilePage />}></Route>
          <Route
            path={appRoutes.WORKOUT_VIDEO_PAGE}
            element={<WorkoutVideoPage />}
          ></Route>
        </Route>
        <Route path={appRoutes.MAIN} element={<MainPage />}></Route>
      </Route>
    </Routes>
  );
}
