import { Await, defer, useLoaderData } from 'react-router-dom';
import { getAccommodations } from "../controllers/accommodation";
import React from 'react';

import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

export function loader() {
  const accommodations = getAccommodations();
  
  return defer ({
    packageAccommodation:accommodations,
  });
}

function Home() {
  const data = useLoaderData();
 
  return (      
    <div className="main-wrapper">
      <Banner />
      <React.Suspense fallback={<p>Loading package location...</p>}>
        <Await resolve={data.packageAccommodation} >
          {(accommodations) => (
            <Gallery accommodations={accommodations}/>
          )}
        </Await>
      </React.Suspense>
      
    </div>
  )
}

export default Home;