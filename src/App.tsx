import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import { WorkoutVideoPage } from "./pages/WorkoutVideoPage/WorkoutVideoPage";
import { appRoutes } from "./route/appRoutes";
import ProtectedRoute from "./route/protectedRoute";

export default function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        {/* <Route path={appRoutes.USER_PAGE} element={<UserPage />}></Route> */}
        <Route
          path={appRoutes.WORKOUT_VIDEO_PAGE}
          element={<WorkoutVideoPage />}
        ></Route>
      </Route>
      <Route path={appRoutes.MAIN} element={<MainPage />}></Route>
    </Routes>
  );
}
