import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../page/Home";
import Events, { loader as eventsLoader } from "../page/Events";
import EventDetails, {
  loader as eventDatailsLoader,
} from "../page/EventDetails";
import NewEvent, { action as newEventAction } from "../page/NewEvent";
import EditEvent from "../page/EditEvent";
import AppLayout from "../Layout/AppLayout";
import EventsRootLayout from "../page/EventRoot";
import Error from "../page/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,

        element: <Home />,
      },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-details",
            loader: eventDatailsLoader,
            children: [
              {
                index: true,
                element: <EventDetails />,
              },
              {
                path: "edit",
                element: <EditEvent />,
              },
            ],
          },

          {
            path: "new",
            element: <NewEvent />,
            action: newEventAction,
          },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
