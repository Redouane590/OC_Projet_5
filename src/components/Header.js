import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
 
function Header() {
    return (
        <header className={styles.navbar}>
            <div>
                <img src='LOGO.jpg' alt='Logo Kasa' />
            </div>

            <nav>
                <NavLink className={styles.link} activeClassName={styles.active} to="/">Accueil</NavLink>
                <NavLink className={styles.link} activeClassName={styles.active} to="/about">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header