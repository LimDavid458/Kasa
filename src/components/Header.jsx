import logo from '../assets/LOGO.svg';
import { NavLink } from 'react-router-dom';

function Header() {
    const activeClassName = "currentPage";

    return (
        <header>
            <NavLink to="/"><img src={logo} alt='Logo kasa'/></NavLink>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : undefined}>Accueil</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? activeClassName : undefined}>A Propos</NavLink>
            </nav>
        </header>
      
    )
}

export default Header