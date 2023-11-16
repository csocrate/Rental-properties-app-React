import PropTypes from 'prop-types';
import styled from 'styled-components';

const SlideShow = styled.div`
  position: relative;
`;

const BtnContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Btn = styled.button`
  border: none;
  padding: 0;
  cursor: pointer;
  background: none;
`;

const Svg = styled.svg`
  width: 28%;
  height: 28%;
`;

const ImagesSeries = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 415px;
  border-radius: 10px;
  padding-left: 0;
  overflow: hidden;
`;
const Li = styled.li`
  display: block;
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  max-width: 100%;
  margin: auto 0;
  object-fit: cover;
  border-radius: 10px;
`;

function Slideshow({images, title}) {

  const handlePreviousSlide = () => {};

  const handleNextSlide = () => {};

  return images.length > 1 ? (
    <>
    <SlideShow className='slideshow'>
      <ImagesSeries>
        {
          images.map((image, index) => 
            <Li key={`slide-${index}`}>
              <Image src={image} alt={title} />
            </Li>)
        }
      </ImagesSeries>
      <BtnContainer>
        <Btn onClick = {handlePreviousSlide}
            id="previous-btn"
            type= "Btn">
          <Svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
          </Svg>
        </Btn>
        <Btn className='next-btn' onClick = {handleNextSlide}
            id="next-btn"
            type= "Btn">
          <Svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
          </Svg>              
        </Btn>
      </BtnContainer>
    </SlideShow>
    </>
  ) : (
    <SlideShow className='slideshow'>
      <ImagesSeries>
        {
          images.map((image, index) => 
            <li key={`slide-${index}`}>
              <Image src={image} alt={title} />
            </li>)
        }
      </ImagesSeries>
    </SlideShow>
  )
}

Slideshow.propTypes = {
  images: PropTypes.array,
  title: PropTypes.string,
}

export default Slideshow;