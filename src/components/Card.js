
import styles from './Card.module.scss'
 
function Card(props) {
    return (
        <div className={styles.card} style={{ backgroundImage: `url(${props.cover})`, backgroundPosition: 'center center'}}>
          <span>{props.title}</span>
        </div>
    )
}

export default Card