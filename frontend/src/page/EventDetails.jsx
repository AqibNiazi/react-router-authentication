import { use } from "react";
import EventItem from "../components/EventItem";
import { useParams, useLoaderData } from "react-router-dom";

const EventDetailPage = () => {
  const data = useLoaderData();
  const params = useParams();
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
