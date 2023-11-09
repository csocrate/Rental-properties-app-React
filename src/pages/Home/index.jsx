import Banner from '../../components/Banner';
import {useState, useEffect} from 'react';
import Card from '../../components/Card';

function Home() {
  const [propertiesData, setPropertiesData] = useState([])

  const getPropertiesData = async () => {
    return fetch(`src/datas/properties.json`)
      .then(response => {
        // Throws an error if the request fails
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPropertiesData(data);
      })
  };

  useEffect(() => {
    getPropertiesData();
  }, []);

  return (
    <>
      <Banner 
        title = 'Chez vous, partout et ailleurs' />
      <div className="cards">
      { 
        propertiesData.map((property) => 
          <Card
            key = {property.id}
            title = {property.title}
            url = {`/propriete/${property.id}`}
            cover = {property.cover}
          />)
      }
      </div>
    </>
  );
}

export default Home;