import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import { aboutList } from '../../datas/aboutList'

function About() {

  return (
    <>
      <Banner 
        title = 'A propos' />
      <div className="about">
        <div>
          {
            aboutList.map((item, index) =>              
              <Collapse 
                key = {`id-${index}`}
                number = {index}
                text = {item.description}
              />)
          }
        </div>
      </div>
    </>
  );
}

export default About;