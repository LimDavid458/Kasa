import DropDown from "../components/DropDown";
import { useParams } from 'react-router-dom';
import Slider from "../components/Slider";
import Tag from "../components/Tag";
import Author from "../components/Author";
import Rating from "../components/Rating";
import { getAccommodationById } from "../controllers/Data";

export default function Accommodation() {
    const { id } = useParams();
    const accommodation = getAccommodationById(id);
    
    return (
        <div className="accommodation">
            <Slider slides={accommodation.pictures}/>

            <div className="accommodation__title">
                <h1>{accommodation.title}</h1>
                <p>{accommodation.location}</p>
            </div>

            <Tag tags={accommodation.tags}/>

            <div className="accommodation__author">
                <Rating rating={accommodation.rating}/>
                <Author name={accommodation.host.name} picture={accommodation.host.picture}/>
            </div>

            <DropDown title='Description' description={accommodation.description} />
            <DropDown title='Equipement' description={accommodation.equipments}/>
        </div>
       
    )
}