import React from 'react';
import styles from './Carroussel.module.scss';
import { useState } from 'react';


const Carroussel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className={styles.carroussel}>
      {length > 1 && (
        <>
          <button onClick={nextSlide} className={styles.buttonRight}><i className="fa-solid fa-chevron-right"></i></button>
          <button onClick={previousSlide} className={styles.buttonLeft}><i className="fa-solid fa-chevron-left"></i></button>
          <div className={styles.counter}>{current + 1}/{length}</div>
        </>
      )}
      {images.map((image, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={image} alt="appartment" className={styles.image} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carroussel;