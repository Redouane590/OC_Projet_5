
import styles from './Banner.module.scss'

function Banner(props) {
    return (
        <div className={styles.banner} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.imageUrl})`}}>
            <h2 className={styles.titleBanner}>{props.title}</h2>
        </div>
    )
}

export default Banner