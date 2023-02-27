import bannerMobile from '../assets/Mobile/Banner_home.jpg';
import bannerDesktop from '../assets/Desktop/Banner_home.jpg';

function Banner() {
    const desktopSize = ' 1440w'
    return (
        <section className='banner'>
            <h1>Chez vous, <br/> partout et ailleurs</h1>
            <img src={bannerMobile} srcSet={bannerDesktop + desktopSize} alt='Bannière home.'/>
        </section>
    )
}

export default Banner

