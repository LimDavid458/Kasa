import { Link } from 'react-router-dom'
import logo from '../../assets/LOGO.svg' 

function Header() {
    return (
        <header>
            <img src={logo} alt='Logo kasa'/>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/A-Propos">A Propos</Link>
            </nav>
        </header>
    )
}

export default Header