import React from "react";
import { Link } from "react-router-dom";
const Dummy_Events = [
  {
    id: "e1",
    title: "Event 1",
  },
  {
    id: "e2",
    title: "Event 2",
  },
  {
    id: "e3",
    title: "Event 3",
  },
];
const EventsPage = () => {
  return (
    <div>
      <ul>
        {Dummy_Events.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsPage;
