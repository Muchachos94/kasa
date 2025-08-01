import { useState } from 'react';
import './Gallery.scss';
import logements from '../../data/logements.json';
import Card from '../Card';

function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const visibleLogements = logements.slice(0, visibleCount);

  return (
    <>
      <section className="kasa-gallery">
        {visibleLogements.map((logement) => (
          <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
        ))}
      </section>

      {visibleCount < logements.length && (
        <div className="kasa-gallery__button-container">
          <button onClick={showMoreCards} className="kasa-gallery__button">
            Afficher plus
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery;