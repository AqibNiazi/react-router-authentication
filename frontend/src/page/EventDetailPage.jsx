import React from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <div>
      <h1>Event Details Page</h1>
      <p>Event ID : {params.eventId}</p>
    </div>
  );
};

export default EventDetailPage;
