import './Rating.scss';
import { FaStar } from 'react-icons/fa';

function Rating({ rating }) {
  const totalStars = 5;
  return (
    <div className="kasa-rating">
      {[...Array(totalStars)].map((_, i) => (
        <FaStar key={i} className={i < rating ? 'active' : 'inactive'} />
      ))}
    </div>
  );
}

export default Rating;