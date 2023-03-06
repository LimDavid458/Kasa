import Card from './Card';
import { useLoaderData } from 'react-router-dom';

export default function Gallery() {
    const accommodations = useLoaderData();
    return(
        <section className='container'>
            {accommodations.map((accommodation) =>
                <Card  key={accommodation.id} accommodation={accommodation}/>   
            )}
        </section>
    )
}