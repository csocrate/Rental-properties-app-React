import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import { aboutList } from '../../datas/aboutList'

function About() {

  return (
    <>
      <Banner 
        title = 'A propos'
        image = 'src/assets/images/about_banner.jpg' />
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