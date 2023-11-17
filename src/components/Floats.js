
import Card from './Card'
import styles from './Floats.module.scss'
import data from '../logements.json'

function Floats() {
    return (
        <div className={styles.grid} >
          {console.log(data)}
          {data.map((apartment) => (
        <Card key={apartment.id} title={apartment.title} cover={apartment.cover}/>
      ))}
          {/* <Card title="Titre de la location" />
          <Card title="Titre de la location" />
          <Card title="Titre de la location" />
          <Card title="Titre de la location" /> */}
        </div>
    )
}

export default Floats