
import Card from './Card'
import styles from './Floats.module.scss'
import data from '../logements.json'
import { Link } from 'react-router-dom'

function Floats() {
    return (
        <div className={styles.grid} >
          {console.log(data)}
          {data.map((appartment) => (
            // link to the float page
            <Link to={`/float/${appartment.id}`} ><Card key={appartment.id} appartment={appartment} /></Link>
            // <Link to='/float/' ><Card key={appartment.id} appartment={appartment} /></Link>
          ))}
          {/* <Card title="Titre de la location" />
          <Card title="Titre de la location" />
          <Card title="Titre de la location" />
          <Card title="Titre de la location" /> */}
        </div>
    )
}

export default Floats