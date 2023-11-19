import Banner from '../../components/Banner';
import propertiesData from '../../datas/properties.json';
import Card from '../../components/Card';

function Home() {

  return (
    <>
      <Banner 
        title = 'Chez vous, partout et ailleurs'
        image = 'src/assets/images/home_banner.jpg' />
      <div className="cards">
        <div>
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
      </div>
    </>
  );
}

export default Home;