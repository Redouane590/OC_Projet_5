import styles from './Footer.module.scss'
import image from '../images/logofooter.png'

function Footer() {
    return (
        <div className={styles.footer}>
          <img src={image} alt='logo kasa footer' />
          <span>© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer