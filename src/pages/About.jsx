import gustavoAlves from '../assets/Mobile/gustavo_alves.jpg';
import DropDown from '../components/DropDown'; 
import gustavoAlesDesktop from '../assets/Desktop/gustavo_alves.jpg';
import aboutNews from '../api/aboutNews.json';

export default function About() {
    return (
        <section className="about">
            <picture>
                <source media='(min-width:376px)' srcSet={gustavoAlesDesktop}/>
                <img src={gustavoAlves} alt="Bannière home." />
            </picture>
            {aboutNews.map(( news ) => 
                <DropDown key={news.title} title={news.title} description={news.description}/>
            )}
        </section>
    )
}