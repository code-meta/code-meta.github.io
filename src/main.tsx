import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Projects from "./Projects.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects/:name",
    element: <Projects />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
