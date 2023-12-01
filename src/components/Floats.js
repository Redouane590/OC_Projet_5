
import Card from './Card'
import styles from './Floats.module.scss'
import data from '../logements.json'

function Floats() {
    return (
        <div className={styles.grid} >
          {console.log(data)}
          {data.map((appartment) => (
            <Card key={appartment.id} appartment={appartment} />
          ))}
          {/* <Card title="Titre de la location" />
          <Card title="Titre de la location" />
          <Card title="Titre de la location" />
          <Card title="Titre de la location" /> */}
        </div>
    )
}

export default Floats