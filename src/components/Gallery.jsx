import Card from './Card';

export default function Gallery({accommodations}) {
    return(
        <section className='container'>
            {accommodations.map((accommodation) =>
                <Card  key={accommodation.id} accommodation={accommodation}/>   
            )}
        </section>
    )
}