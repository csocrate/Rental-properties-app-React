import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import { aboutList } from '../../datas/aboutList';
import aboutBanner from '../../assets/images/about_banner.jpg';

function About() {

  return (
    <>
      <Banner 
        title = 'A propos'
        image = {aboutBanner} />
      <div className="about">
        <div>
          {
            aboutList.map((item, index) =>              
              <Collapse 
                key = {`id-${index}`}
                title = {item.title}
                number = {index}
                dataArray = {[item.description]}
              />)
          }
        </div>
      </div>
    </>
  );
}

export default About;