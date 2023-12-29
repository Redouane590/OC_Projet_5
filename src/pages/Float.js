import { useParams } from "react-router-dom";
import data from '../logements.json'
import Carroussel from '../components/Carroussel'
import styles from './Float.module.scss'
import Collapse from '../components/Collapse'
import Rate from '../components/Rate'
import Footer from '../components/Footer'

export default function Float() {
  let { id } = useParams();
  const appart = data.find((appartment) => appartment.id === id)
  console.log(appart)
  console.log(appart.pictures)

  return (
<>
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
          <span className={styles.tag}>{tag}</span>
          )}
          </div>
          
        </div>
        <div className={styles.infoHostBox}>
          <div className={styles.hostInfos}>         
              <p className={styles.hostname}>{appart.host.name}</p>
              <img className={styles.hostPic} src={appart.host.picture} alt={appart.host.name} />
          </div>
          
          {/* <span className={styles.ratingNumber}>{appart.rating}</span> */}
          <Rate rating={appart.rating}/>
        </div>
      </div>

      <div className={styles.collapse}>
        {/* <p className={styles.descriptionText}>{appart.description}</p> */}
      <Collapse title="Description" content={appart.description}/>
      <Collapse title="Équipements" content={ <ul className={styles.list}>
        {appart.equipments.map((equipment) =>
          <li>{equipment}</li>
        )}
      </ul>}/>
      </div>

      {/* <h2>{appart.title}</h2>
      <p>{appart.description}</p>
      <p>{appart.host.name}</p>
      <p>{appart.location}</p>
      <p>{appart.tags}</p>
      <p>{appart.rating}</p>
      <p>{appart.price}</p> */}
    </div>
    <Footer />
    </>
  )
}