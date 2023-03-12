import { useLoaderData } from 'react-router-dom';
import { getAccommodations } from "../controllers/accommodation";

import Banner from '../components/Banner';
import Gallery from '../components/Gallery';

export function loader() {
  return getAccommodations();
}

function Home() {
  const accommodations = useLoaderData();

  return (      
    <div className="main-wrapper">
      <Banner />
      <Gallery accommodations={accommodations}/>
    </div>
  )
}

export default Home;