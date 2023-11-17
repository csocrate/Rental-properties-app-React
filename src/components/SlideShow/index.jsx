import PropTypes from 'prop-types';
import { useState } from 'react';

function Slideshow({images, title}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  let lastIndex = images.length -1;

  const handleNextSlide = () => 
    (currentIndex == lastIndex ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1));    

  const handlePreviousSlide = () => 
    (currentIndex == 0 ? setCurrentIndex(lastIndex) : setCurrentIndex(currentIndex - 1));

  return images.length > 1 ? (
    <>
    <div className='slideshow'>
      <ul>
        {
          images.map((image, index) => 
            <li key={`slide-${index}`} className={index == currentIndex ? 'active' : ''} >
              <img src={image} alt={title} />
            </li>)
        }
      </ul>
      <div>
        <button 
          className='previous-btn' 
          onClick = {handlePreviousSlide}
          type= "Btn">
          <svg width="20" height="20" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
          </svg>
        </button>
        <button 
          className='next-btn' 
          onClick = {handleNextSlide}
          type= "Btn">
          <svg width="20" height="20" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
          </svg>              
        </button>
      </div>
    </div>
    </>
  ) : (
    <div className='slideshow'>
      <ul>
        {
          images.map((image, index) => 
            <li key={`slide-${index}`} className='active'>
              <img src={image} alt={title} />
            </li>)
        }
      </ul>
    </div>
  )
}

Slideshow.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
}

export default Slideshow;