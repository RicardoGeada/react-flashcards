import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";

import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import { DataProvider } from "./context";

const router = createBrowserRouter([
  { path: "/", element: <MainPage />, errorElement: <NotFoundPage /> },
  { path: "/categories/:categoryId", element: <CategoryPage />, errorElement: <NotFoundPage /> },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>
);
