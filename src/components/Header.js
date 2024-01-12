import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import logo from '../images/LOGO.jpg'

function Header() {
    return (
        <header className={styles.navbar}>
            <div>
                <img src={logo} alt='Logo Kasa' />
            </div>

            <nav>
                <NavLink className={`${styles.link}`}  to="/" style={({ isActive }) => {
                    return {textDecorationLine: isActive ? "underline" : ""};
                }}>Accueil</NavLink>
                <NavLink className={`${styles.link}`}  to="/about" style={({ isActive }) => {
                    return {textDecorationLine: isActive ? "underline" : ""};
                }}>A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header