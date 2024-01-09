import { useParams } from "react-router-dom";
import data from '../logements.json'
import Carroussel from '../components/Carroussel'
import styles from './Float.module.scss'
import Collapse from '../components/Collapse'
import Rate from '../components/Rate'
import Page404 from './Page404'

export default function Float() {
  let { id } = useParams();
  const appart = data.find((appartment) => appartment.id === id)
  if (!appart) return <Page404 />

  return (

    <div className={styles.boxflat}>
      <div className={styles.carroussel}>
        <Carroussel images={appart.pictures} />
      </div>
      
      <div className={styles.appartInfos}>
        <div className={styles.mainInfos}>
          <h1 className={styles.title}>{appart.title}</h1>
          <h2 className={styles.location}>{appart.location}</h2>
          <div className={styles.tags}>
          {appart.tags.map((tag) =>
          
          <span key={tag} className={styles.tag}>{tag}</span>
          )}
          </div>
          
        </div>
        <div className={styles.infoHostBox}>
          <div className={styles.hostInfos}>         
              <p className={styles.hostname}>{appart.host.name}</p>
              <img className={styles.hostPic} src={appart.host.picture} alt={appart.host.name} />
          </div>
          <Rate rating={appart.rating}/>
        </div>
      </div>

      <div className={styles.collapse}>
      <Collapse title="Description" content={appart.description}/>
      <Collapse title="Équipements" content={ <ul className={styles.list}>
        {appart.equipments.map((equipment) =>
          <li key={equipment}>{equipment}</li>
        )}
      </ul>}/>
      </div>
    </div>
    
    
  )
}