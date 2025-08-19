import EventItem from "../components/EventItem";
import { redirect, useParams, useRouteLoaderData } from "react-router-dom";
import { getAuthToken } from "../util/auth";
const EventDetailPage = () => {
  const token = getAuthToken();
  const data = useRouteLoaderData("event-details");
  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch event." }), {
      status: 500,
    });
  } else {
    return response;
  }
};

export const action = async ({ request, params }) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not delete event." }), {
      status: 500,
    });
  }
  return redirect("/events");
};