import PropTypes from 'prop-types';
import { useState } from 'react';

function Collapse({ title, number, dataArray }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCollapsible = () => {
    setIsExpanded(false);
  };

  return isExpanded ? (
    <article className="accordion" style={{ backgroundColor: '#F6F6F6' }}>
      <h3>
        <button
          onClick={handleCollapsible}
          id={`accordion-header-${number}`}
          className="accordion__header"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={`accordion-panel-${number}`}
        >
          {title}
          <svg
            aria-hidden="true"
            width="23"
            height="22"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
              fill="white"
            />
          </svg>
        </button>
      </h3>
      <div
        id={`accordion-panel-${number}`}
        className="accordion__panel"
        role="region"
        aria-labelledby={`accordion-header-${number}`}
      >
        <ul>
          {dataArray.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
    </article>
  ) : (
    <article className="accordion">
      <h3>
        <button
          onClick={() => setIsExpanded(true)}
          id={`accordion-header-${number}`}
          className="accordion__header"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={`accordion-panel-${number}`}
        >
          {title}
          <svg
            aria-hidden="true"
            width="23"
            height="22"
            viewBox="0 0 33 32"
            transform="rotate(180)"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
              fill="white"
            />
          </svg>
        </button>
      </h3>
    </article>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  dataArray: PropTypes.node.isRequired,
};

Collapse.defaultProps = {
  title: '',
  number: '',
  dataArray: [],
};

export default Collapse;
