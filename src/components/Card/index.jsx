import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="kasa-card">
      <div className="kasa-card__image">
        <img src={cover} alt={title} />
        <div className="kasa-card__overlay" />
      </div>
      <h2 className="kasa-card__title">{title}</h2>
    </Link>
  );
}

export default Card;