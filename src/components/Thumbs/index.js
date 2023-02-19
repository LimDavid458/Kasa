import ad from '../../datas/adList.json'
import { Link } from 'react-router-dom'

export default function Thumbs() {
    return(
        <section className='container'>
            {ad.map((ad) =>
                <Link key={ad.id} to={`/${ad.id}`}>
                    <img src={ad.cover} alt={ad.title}/>
                    <h2>{ad.title}</h2>
                </Link>
                    
                
            )}
        </section>
    )
}