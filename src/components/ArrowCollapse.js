import arrow from '../images/flechecollapse.png'

function ArrowCollapse({rotate}) {
  return (
    <div style={{ transform: `rotate(${rotate}deg)`, transition: 'transform 0.3s ease 0s;'}}>
      <img src={arrow} alt="Description de l'image" />
    </div>
  );
}

export default ArrowCollapse;