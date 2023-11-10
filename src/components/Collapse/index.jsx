import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

const Accordion = styled.article`
  width: 100%;
  margin-top: .75rem;
  margin-bottom: .75rem;
`;

const Btn = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid #FF6060;
  border-radius: 5px;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  background-color: #FF6060;
`;

const StyledSVG = styled.svg`
  width: 25px;
  height: 24px;
`;

function Collapse({title, number, text}) {

  const [isExpanded, setIsExpanded] = useState(false);

  return isExpanded ? (
    <Accordion className="accordion">
      <h3>
        <Btn onClick = {() =>setIsExpanded(false)}
                id={`accordion-header-${number}`}
                type= "button"
                aria-expanded = "true"
                aria-controls = {`accordion-panel-${number}`}>
          {title}
          <StyledSVG aria-hidden="true" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
          </StyledSVG>
        </Btn>
      </h3>
      <div id={`accordion-panel-${number}`}
          className="accordion__collapse"
          role="region"
          aria-labelledby="accordion1id">
        <p>
          {text}
        </p>
      </div>
    </Accordion>
  ) : (
    <Accordion className="accordion">
      <h3>
        <Btn onClick = {() =>setIsExpanded(true)}
                id={`accordion-header-${number}`}
                type= "button"
                aria-expanded = "false"
                aria-controls = {`accordion-panel-${number}`}>
          {title}
          <StyledSVG width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
          </StyledSVG>
        </Btn>
      </h3>
    </Accordion>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

Collapse.defaultProps = {
  title: '',
  number: '',
  text: ''
}

export default Collapse;