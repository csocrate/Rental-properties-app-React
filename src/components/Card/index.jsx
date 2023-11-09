import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function Card({title, url, cover}) {

  return (
    <Link to = {url}>
      <article className='Card'>
          <h2>
            {title}
          </h2>
          <img src={cover} alt={title} />
      </article>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
}

Card.defaultProps = {
  title: '',
  url: '',
  cover: ''
}

export default Card;