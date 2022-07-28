import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

/* Page Layouts */
import MainPageLayout from "@/layout/MainPage/PageLayout";
import AdminPageLayout from "@/layout/AdminPage/PageLayout";

/* Main site Routes */
import Home from "@/pages/Home/Home";
/* Admin site Routes */
import Admin from "@/pages/Admin/Home/Home";

import { defaultTheme } from "./theme";

const GlobalStyles = createGlobalStyle`
  :root {
    --text-primary: crimson;
  }
  *::before,
  *,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  img,
  picture {
    display: block;
    width: 100%;
  }
  h1,
  h2,
  h3,
  h4
  h5,
  h6,
  input,
  textarea,
  button,
  select {
    font: inherit;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    font-family: 'Lato', 'Roboto', sans-serif;
    font-size: 16px;
    scroll-behavior: smooth;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPageLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/admin" element={<AdminPageLayout />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
