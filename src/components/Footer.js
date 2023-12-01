import styles from './Footer.module.scss'
 
function Footer() {
    return (
        <div className={styles.footer}>
          <img src='logofooter.png' alt='logo kasa footer' />
          <span>© 2020 Kasa. All rights reserved</span>
        </div>
    )
}

export default Footer