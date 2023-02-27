import DropDown from "../components/DropDown";
import { useParams } from 'react-router-dom';
import adList from '../api/adList.json';
import Slider from "../components/Slider";
import Tag from "../components/Tag";
import Rate from "../components/Rate";

export default function Accommodation() {
    const adId = useParams();
    const ad = adList.find(x => x.id === adId.id);
    
    return (
        <div className="accommodation">
            <Slider slides={ad.pictures}/>
            <div className="accommodation__title">
                <h1>{ad.title}</h1>
                <p>{ad.location}</p>
            </div>
            <Tag tags={ad.tags}/>
            <Rate rating={ad.rating}/>
            <DropDown title='Description' description={ad.description} />
            <DropDown title='Equipement' description={ad.equipments}/>
        </div>
       
    )
}