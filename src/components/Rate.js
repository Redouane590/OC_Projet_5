import styles from './Rate.module.scss'

function Rate({rating}) {
  const maxRating = 5;
  
  return (
    <div>
      <span className={styles.ratingNumber}>
        {Array.from({ length: parseInt(rating) }, (_, index) => (
          <i key={index} className="fa-solid fa-star"></i>
        ))}
        {Array.from({ length: maxRating - parseInt(rating) }, (_, index) => (
          <i key={index} className="fa-regular fa-star"></i>
        ))}
      </span>
    </div>
  );
}

export default Rate