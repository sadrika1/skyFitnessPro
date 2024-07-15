import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import "../input.css";
import './App.css'
import App from "./App";
// import { store } from "./store/store";
import ReduxCourseProvider from './store/ReduxCourseProvider';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ReduxCourseProvider>
      {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </ReduxCourseProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
