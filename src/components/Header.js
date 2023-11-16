import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
 
function Header() {
    return (
        <div className={styles.navbar}>
            <div>
                <img src='LOGO.jpg' alt='Logo Kasa' />
            </div>

            <nav>
                <NavLink className={styles.link} activeClassName={styles.active} to="/">Accueil</NavLink>
                <NavLink className={styles.link} activeClassName={styles.active} to="/about">A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header