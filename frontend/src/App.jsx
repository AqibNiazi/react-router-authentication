import React from "react";
import AppRoutes from "./routes";
// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// Done
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// Done
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// Done
// 4. Add properly working links to the MainNavigation
// Done
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// Done
// 6. Output a list of dummy events to the EventsPage
// Done
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// Done
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const App = () => {
  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
