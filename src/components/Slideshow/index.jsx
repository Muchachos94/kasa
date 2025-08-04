import { useState } from 'react'
import './Slideshow.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Slideshow({ pictures }) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null);
  const [direction, setDirection] = useState('');
  const [animKey, setAnimKey] = useState(0)

  const total = pictures.length

  const goTo = (dir) => {
    setPrev(current);
    setDirection(dir);
    setAnimKey(prevKey => prevKey + 1)

    if (dir === 'right') {
      setCurrent((current + 1) % total);
    } else {
      setCurrent((current - 1 + total) % total);
    }
  };

  return (
    <div className="slideshow">
    {prev !== null && prev !== current && (
        <img
          key={`prev-${animKey}`}
          src={pictures[prev]}
          alt="Previous"
          className={`slideshow__image slide-out-${direction}`}
        />
      )}
      <img 
      key={`current-${animKey}`}
      src={pictures[current]}
      alt={`Slide ${current + 1}`} 
      className={`slideshow__image slide-in-${direction}`}
    />

      {total > 1 && (
        <>
          <button className="slideshow__arrow left" onClick={() => goTo('left')}><FaChevronLeft /></button>
          <button className="slideshow__arrow right" onClick={() => goTo('right')}><FaChevronRight /></button>
          <span className="slideshow__counter">{current + 1}/{total}</span>
        </>
      )}
    </div>
  )
}

export default Slideshow