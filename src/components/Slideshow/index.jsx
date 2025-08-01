import { useState } from 'react'
import './Slideshow.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Slideshow({ pictures }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState('');
  const total = pictures.length

  const prev = () => {
    setDirection('left');
    setCurrent((current - 1 + total) % total)
  }
  const next = () => {
    setDirection('right');
    setCurrent((current + 1) % total)
  }

  return (
    <div className="slideshow">
      <img src={pictures[current]}
      alt={`Slide ${current + 1}`} 
      className={`slideshow__image slideshow__image--${direction}`}
      key={current}
    />

      {total > 1 && (
        <>
          <button className="slideshow__arrow left" onClick={prev}><FaChevronLeft /></button>
          <button className="slideshow__arrow right" onClick={next}><FaChevronRight /></button>
          <span className="slideshow__counter">{current + 1}/{total}</span>
        </>
      )}
    </div>
  )
}

export default Slideshow