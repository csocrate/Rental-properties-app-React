import { useParams } from 'react-router-dom';
import propertiesData from '../../datas/properties.json';

function Property() {

  // Get the propertyId param from the URL.
  let {propertyId} = useParams();

  let property = propertiesData
    .find((data) => data.id == propertyId);

  let tags = property.tags;
  tags.map((tag) => console.log(tag))

  return (
    <>
    <div className='property'>
      <div>
        <h1>
          {property.title}
        </h1>
        <h2>
          {property.location}
        </h2>
        <ul>
          {
          tags.map((tag, index) => 
            `<li key=tag-${index}>${tag}</li>`)
          }
        </ul>
      </div>
    </div>
    </>
  );
}

export default Property;