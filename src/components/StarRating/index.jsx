import PropTypes from 'prop-types';

function StarRating({rating}) {

  const stars = [1, 2, 3, 4, 5];

  return (
      <div>
			{stars.map((star) =>
				parseInt(rating) >= star ? (
					<span key={star.toString()} className='fa-solid fa-star' aria-hidden='true'></span>
				) : null
			)}
      </div>
  )
}

StarRating.propTypes = {
  rating: PropTypes.string.isRequired
}

StarRating.defaultProps = {
  rating: ''
}

export default StarRating;