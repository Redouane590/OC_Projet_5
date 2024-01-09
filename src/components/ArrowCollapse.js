import arrow from '../images/flechecollapse.png'
import styles from './ArrowCollapse.module.scss'

function ArrowCollapse({rotate}) {
  return (
    <div className={styles.arrColl} style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 0.3s ease'}}>
      <img src={arrow} alt="Description de l'image" />
    </div>
  );
}

export default ArrowCollapse;