import { Navigate, useLoaderData } from 'react-router-dom';
import { getAccommodationById } from "../controllers/accommodation";

import DropDown from "../components/DropDown";
import Slider from "../components/Slider";
import Tag from "../components/Tag";
import Author from "../components/Author";
import Rating from "../components/Rating";

export function loader({ params }) {
    return getAccommodationById(params.id);
} 
  
export default function Accommodation() {
    const accommodation = useLoaderData();

    if(accommodation === null) return <Navigate to="/404" />
  
    return (
        <div className="accommodation">
            <Slider slides={accommodation.pictures}/>

            <div className='accommodation__author'>
                <div className="title">
                    <h1>{accommodation.title}</h1>
                    <p>{accommodation.location}</p>
                    <Tag tags={accommodation.tags}/>
                </div>

                <div className="description">
                    <Rating rating={accommodation.rating}/>
                    <Author name={accommodation.host.name} picture={accommodation.host.picture}/>
                </div>

            </div>
            
            <div className='accommodation__dropDown'>
                <DropDown title='Description' description={accommodation.description} />
                <DropDown title='Equipements' description={accommodation.equipments}/>
            </div>
            
        </div>
    )
}