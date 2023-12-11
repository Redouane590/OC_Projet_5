import { useParams } from "react-router-dom";
import data from '../logements.json'
import Carroussel from '../components/Carroussel'

export default function Float() {
  let { id } = useParams();
  const appart = data.find((appartment) => appartment.id === id)
  console.log(appart)
  console.log(appart.pictures)

  return (

    <div>
      <Carroussel images={appart.pictures} />
      {/* <img src={appart.cover} alt={appart.title} /> */}
      <h2>{appart.title}</h2>
      <p>{appart.description}</p>
      <p>{appart.host.name}</p>
      <p>{appart.location}</p>
      <p>{appart.tags}</p>
      <p>{appart.rating}</p>
      <p>{appart.price}</p>
    </div>
  )
}