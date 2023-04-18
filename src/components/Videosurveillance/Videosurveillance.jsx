import Menu from '../Menu';
import Footer from '../Footer';
import Bannernoslide from '../Bannernoslide';
import cameraimg from '../../assets/cameraimg.jpg';
import Description from '../Description';
import Camerafeature from '../Camerafeature';
import Whycamera from '../Whycamera';
import Testimonial from '../Testimonial';


function Videosurveillance() {
    return (
        <>
            <Menu />
            <Bannernoslide
                image={cameraimg}
                text={`Video Surveillance`}
                navigation={`Services >> Video Surveillance`}
            />
            <Description />
            <Camerafeature />
            <Whycamera />
            <Testimonial  />
            <Footer />
        </>
    );
}

export default Videosurveillance;
