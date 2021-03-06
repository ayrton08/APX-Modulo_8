import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

const rootElement = document.querySelector(".root");
const root = createRoot(rootElement);

// export const MyContext = React.createContext({ username: "" });

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </RecoilRoot>
);

// root.render(
//   <MyContext.Provider value={{ username: "Ayrton" }}>
//   <BrowserRouter>
//     <AppRoutes />
//   </BrowserRouter>
//   </MyContext.Provider>
// );
