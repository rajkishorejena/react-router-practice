// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import EventsPage, { loader as EventLoader } from "./pages/EventsPage"
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage"
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/Error"
import EventDetailsPage, { loader as EventDetailLoader,action as deleteEventAction } from './pages/EventDetailsPage'
import EventsRootsLayout from "./pages/EventsRoots";
import {action as manipulateEventAction} from "./components/EventForm";
import NewsletterPage,{action as newsletterAction} from "./pages/Newsletter";
//Here we are using Relative Path to the Parent.... 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },//{path:"/",element:<HomPage/>},
      {
        path: 'events', element: <EventsRootsLayout />,
        children: [
          {
            index: true, element: <EventsPage />,
            loader: EventLoader
          },
          {
            path:":eventId",
            id:"event-detail",
            loader: EventDetailLoader ,
            children:[
              { index:true,
               element: <EventDetailsPage />, 
               action:deleteEventAction,
              },
              { 
                path: "edit",
                element: <EditEventPage />,
                action:manipulateEventAction
               }
            ]
          },
          { path: "new", element: <NewEventPage />,action:manipulateEventAction },
         
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      }
    ]
  }
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
