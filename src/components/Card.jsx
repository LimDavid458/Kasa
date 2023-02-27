import { Link } from 'react-router-dom';

export default function Card({ad}) {
    return (
        <Link to={`logement/${ad.id}`}>
            <img src={ad.cover} alt={ad.title}/>
            <h2>{ad.title}</h2>
        </Link>
        
    )
}