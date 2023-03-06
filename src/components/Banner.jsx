import bannerMobile from '../assets/Mobile/Banner_home.jpg';
import bannerDesktop from '../assets/Desktop/Banner_home.jpg';

function Banner() {
    return (
        <picture className='banner'>
            <h1>Chez vous, <span>partout et ailleurs</span></h1>
            <source media='(min-width:376px)' srcSet={bannerDesktop}/>
            <img src={bannerMobile} alt="Bannière home." />
        </picture>
    )
}

export default Banner

