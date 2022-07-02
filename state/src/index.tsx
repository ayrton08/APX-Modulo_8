import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { createRoot } from "react-dom/client";

const rootElement = document.querySelector(".root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
