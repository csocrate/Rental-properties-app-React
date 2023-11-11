import PropTypes from 'prop-types';

function Banner({title, image}) {

  const bgImage = {backgroundImage: `url(${image})`};

  return (
    <>
      <div className="banner" style = {bgImage}>
        <h1>
          {title}
        </h1>
      </div>
    </>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
}

export default Banner;