import { Link } from 'react-router-dom';

export default function Card({accommodation}) {
    return (
        <Link to={`accommodation/${accommodation.id}`}>
            <img src={accommodation.cover} alt={accommodation.title}/>
            <h2>{accommodation.title}</h2>
        </Link>
        
    )
}