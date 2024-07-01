import "./App.css";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import { appRoutes } from "./route/appRoutes";


function App() {
  return (
    <>

      <Routes>
        <Route path={appRoutes.MAIN} element={<MainPage />}>


        </Route>
      </Routes>
    </>
  )
}

export default App;
