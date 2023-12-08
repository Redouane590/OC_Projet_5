import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import styles from './Page404.module.scss'

export default function Page404() {
  return (
    <>
    <div className={styles.pageError}>
      <span className={styles.title}>404</span>
      <span className={styles.notfound}>Oups! La page que vous demandez n'existe pas.</span>
      <Link to='/' className={styles.link}>Retourner sur la page d’accueil</Link>
    </div>
    <Footer />
    </>
  )
}