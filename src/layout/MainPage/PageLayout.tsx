import React from "react";
import { Outlet } from "react-router-dom";

export default function MainSiteLayout() {
  return (
    <>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </>
  );
}
