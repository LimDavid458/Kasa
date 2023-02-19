import bannerHome from '../../assets/Mobile/Banner_home.jpg'

function Banner() {
    return (
        <section className='banner'>
            <h1>Chez vous, <br/> partout et ailleurs</h1>
            <img src={bannerHome} alt='Bannière home.'/>
        </section>
    )
}

export default Banner