import React from 'react'
import { Outlet } from 'react-router-dom';
import EventsNavigation from "../components/EventsNavigation";
const EventsRootsLayout = () => {
  return (
        <>
        <EventsNavigation />
        <Outlet/>
        </>
  )
}

export default EventsRootsLayout