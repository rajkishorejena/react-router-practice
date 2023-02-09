
import {json, useLoaderData} from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events}/>
    </>
  );
}

export default EventsPage;

export const loader =async()=>{
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // console.warn('Fetching events failed.');

    // throw new Response(JSON.stringify({message:"Could not fetch event"}),{
    //   status:500
    // });

    throw json(
      {message:"Could not fetch event"},
      {status:500}
    )
  } else {
    const resData = await response.json();
    return resData.events;
  }
}







// import { useEffect, useState } from 'react';

// import EventsList from '../components/EventsList';

// function EventsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [fetchedEvents, setFetchedEvents] = useState();
//   const [error, setError] = useState();

//   useEffect(() => {
//     async function fetchEvents() {
//       setIsLoading(true);
//       const response = await fetch('http://localhost:8080/events');

//       if (!response.ok) {
//         setError('Fetching events failed.');
//       } else {
//         const resData = await response.json();
//         setFetchedEvents(resData.events);
//       }
//       setIsLoading(false);
//     }

//     fetchEvents();
//   }, []);
//   return (
//     <>
//       <div style={{ textAlign: 'center' }}>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>{error}</p>}
//       </div>
//       {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
//     </>
//   );
// }

// export default EventsPage;















// import React from 'react'
// import { Link } from 'react-router-dom';

// const DUMMY_EVENTS = [
//   {
//     id:"e1",
//     title:"Event Number One"
//   },
//   {
//     id:"e2",
//     title:"Event Number Second"
//   }
// ];
// const EventsPage = () => {
//   return (
//       <>
//        <h1>Event List </h1>
//        {DUMMY_EVENTS.map(event=>
//         <li id={event.id}><Link to={event.id}>{event.title}</Link></li>
//         )}
//       </>
//   )
// }

// export default EventsPage