import { useParams } from 'react-router-dom';
import propertiesData from '../../datas/properties.json';
import StarRating from '../../components/StarRating';
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/SlideShow';

function Property() {

  // Get the propertyId param from the URL.
  let {propertyId} = useParams();

  let property = propertiesData
    .find((data) => data.id == propertyId);

  let tags = property.tags
    .map((tag, index) => <li key={`tag-${index}`}>{tag}</li>)

  let host = property.host;

  let equipments = property.equipments
    .map((equipment, index) => <span key={index}>{equipment}</span>);

  let accordions = [
    {
      title: 'Description',
      description: property.description
    },
    {
      title: 'Equipements',
      description: equipments
    }
  ];
  
  return (
    <>
      <div className='property'>
        <div className='property__header'>
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
              <div>
                <span className='fa-solid fa-star' aria-hidden='true'></span>
                <span className='fa-solid fa-star' aria-hidden='true'></span>
                <span className='fa-solid fa-star' aria-hidden='true'></span>
                <span className='fa-solid fa-star' aria-hidden='true'></span>
                <span className='fa-solid fa-star' aria-hidden='true'></span>
              </div>
              <StarRating
                rating = {property.rating} />
            </div>
          </div>
        </div>
        <div className='property__main'>
          {
            accordions.map((item, index) =>              
              <Collapse 
                key = {`id-${index}`}
                title = {item.title}
                number = {index}
                text = {item.description}
              />)
          }
        </div>
        <div className='property__carousel'>
          <Slideshow 
            images = {property.pictures}
            title = {property.title} />
        </div>
      </div>
    </>
  );
}

export default Property;