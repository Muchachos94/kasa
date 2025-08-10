import { useState } from 'react';
import './Collapse.scss';
import { FaChevronUp } from 'react-icons/fa';

function Collapse({ title, content, variant = 'default' }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse collapse--${variant} ${isOpen ? 'open' : ''}`}>
      <div className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span className={`collapse__icon ${isOpen ? 'rotate' : ''}`}>
        <FaChevronUp />
        </span>
      </div>

      <div className="collapse__content">
          <div className="collapse__inner">
          {content}
          </div>
        </div>
    </div>
  );
}

export default Collapse;