
import styles from './Card.module.scss'
 
function Card({appartment}) {
    return (
        
          <div className={styles.card} style={{ backgroundImage: `url(${appartment.cover})`, backgroundPosition: 'center center'}}>
            <span>{appartment.title}</span>
          </div>
        
    )
}

export default Card