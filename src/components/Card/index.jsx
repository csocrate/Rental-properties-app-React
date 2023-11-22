import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ title, url, cover }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <figure>
        <Link to={url}>
          <img src={cover} alt={title} loading="lazy" />
        </Link>
      </figure>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: '',
  url: '',
  cover: '',
};

export default Card;
