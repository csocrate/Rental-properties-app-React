import Banner from '../../components/Banner';
import propertiesData from '../../datas/properties.json';
import Card from '../../components/Card';
import homeBanner from '../../assets/images/home_banner.jpg';

function Home() {

  return (
    <>
      <Banner 
        title = 'Chez vous, partout et ailleurs'
        image = {homeBanner} />
      <div className="cards">
        <div>
          { 
            propertiesData.map((property, index) => 
              <Card
                key = {index}
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