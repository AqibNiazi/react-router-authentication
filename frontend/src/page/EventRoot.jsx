import React from "react";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsRootLayout = () => {
  return (
    <div>
      <EventsNavigation />
      <Outlet />
    </div>
  );
};

export default EventsRootLayout;
