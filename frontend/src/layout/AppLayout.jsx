import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return <>
    <MainNavigation />
    <main>
    <Outlet/>
    </main>
  </>;
};

export default AppLayout;
