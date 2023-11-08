import PropTypes from 'prop-types';

function Banner({title}) {

  return (
    <>
      <div className="banner">
        <h1>
          {title}
        </h1>
      </div>
    </>
  );
}

Banner.propTypes = {
  title: PropTypes.string
}

export default Banner;