import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Content from "./component/body/Content.jsx";
import Teams from "./component/Teams/Teams.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Content />} />
      <Route path="/teams" element={<Teams />} />
      <Route
        path="*"
        element={
          <div className="flex flex-col gap-28 h-[700px] items-center justify-center">
            <h1 className="text-4xl text-red-600">Requested Page Not Found</h1>
            <p className="text-2xl">Check The URL ;)</p>
          </div>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
