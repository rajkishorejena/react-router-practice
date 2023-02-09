import React from 'react'
import { json, redirect, useRouteLoaderData } from 'react-router-dom';
// import {useParams} from 'react-router-dom'

import EventItem from "../components/EventItem";
const EventDetailsPage = () => {

  const data = useRouteLoaderData("event-detail");
  // const prams = useParams();
  return (
     <EventItem event={data.event}/>
  )
}

export default EventDetailsPage;

export const loader  = async({request,params})=>{
   const id = params.eventId;
   const response  = await fetch(`http://localhost:8080/events/${id}`);

   if(!response.ok){
      throw json(
        {message:"Could not fetch Details from selected events."},
        {status:500}
      );
   }else{
    return response;
   }
};

export const action  = async ({request,params}) =>{
   const id = params.eventId;
   const response  = await fetch(`http://localhost:8080/events/${id}`,{
      method:request.method
   });

   if(!response.ok){
      throw json(
        {message:"Could not able to delete the events."},
        {status:500}
      );
   }

   return redirect('/events');
}