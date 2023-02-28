import gustavoAlves from '../assets/Mobile/gustavo_alves.jpg';
import DropDown from '../components/DropDown'; 
import gustavoAlesDesktop from '../assets/Desktop/gustavo_alves.jpg';

export default function About() {
    const reliability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const security = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."; 
    const desktopSize = ' 1440w';
    const mobileSize = ' 375w, ';

    return (
        <section className="about">
            <img height="226" width="336" src={gustavoAlves} srcSet={gustavoAlves + mobileSize+ gustavoAlesDesktop+ desktopSize } sizes="(max-width: 375px) 375px" alt='Des montagnes avec ces arbres.' />
            <DropDown title="Fiabilité" description={reliability}/>
            <DropDown title="Respect" description={respect}/>
            <DropDown title="Service" description={service}/>
            <DropDown title="Sécurité" description={security}/>
        </section>
    )
}