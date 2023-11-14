import { useParams } from 'react-router-dom';
import propertiesData from '../../datas/properties.json';

function Property() {

  // Get the propertyId param from the URL.
  let {propertyId} = useParams();

  let property = propertiesData
    .find((data) => data.id == propertyId);

  let tags = property.tags
    .map((tag, index) => <li key={`tag-${index}`}>{tag}</li>)

  let host = property.host;
  
  return (
    <>
    <div className='property'>
      <div>
        <div className='part-left'>
          <h1>
            {property.title}
          </h1>
          <h2>
            {property.location}
          </h2>
          <ul>
            {tags}
          </ul>
        </div>
        <div className='part-right'>
          <div className='part-right__host'>
            <span>
              {host.name}
            </span>
            <img aria-hidden="true" src={host.picture} alt={host.name} />
          </div>
          <div className='part-right__rating'>
            <i className='fa-solid fa-star' aria-hidden='true'></i>
            <i className='fa-solid fa-star' aria-hidden='true'></i>
            <i className='fa-solid fa-star' aria-hidden='true'></i>
            <i className='fa-solid fa-star' aria-hidden='true'></i>
            <i className='fa-solid fa-star' aria-hidden='true'></i>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Property;