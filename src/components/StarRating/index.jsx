import PropTypes from 'prop-types';
import styled from 'styled-components';

const StarIcon = styled.span`
  color: #FF6060;
`;

function StarRating({rating}) {

  const stars = [1, 2, 3, 4, 5];

  return (
      <div>
			{stars.map((star) =>
				parseInt(rating) >= star ? (
					<StarIcon key={star.toString()} className='fa-solid fa-star' aria-hidden='true'> </StarIcon>
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