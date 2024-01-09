
import Card from './Card'
import styles from './Floats.module.scss'
import data from '../logements.json'
import { Link } from 'react-router-dom'

function Floats() {
    return (
        <div className={styles.grid} >
          {data.map((appartment) => (
            <Link key={appartment.id} to={`/float/${appartment.id}`} ><Card  appartment={appartment} /></Link>
          ))}
        </div>
    )
}

export default Floats