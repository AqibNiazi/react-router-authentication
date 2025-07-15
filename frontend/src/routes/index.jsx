import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../page/HomePage";
import EventsPage from "../page/EventsPage";
import EventDetailPage from "../page/EventDetailPage";
import NewEventPage from "../page/NewEventPage";
import EditEventPage from "../page/EditEventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/events/:eventId",
    element: <EventDetailPage />,
  },
  {
    path: "/events/new",
    element: <NewEventPage />,
  },
  {
    path: "/events/:eventId/edit",
    element: <EditEventPage />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
