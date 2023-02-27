import ad from '../api/adList.json';
import Card from './Card';

export default function Gallery() {
    return(
        <section className='container'>
            {ad.map((ad) =>
                <Card  key={ad.id} ad={ad}/>   
            )}
        </section>
    )
}