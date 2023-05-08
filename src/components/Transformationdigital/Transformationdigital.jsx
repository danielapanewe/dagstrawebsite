import Menu from '../Menu';
import Footer from '../Footer';

import Bannernoslide from '../Bannernoslide';
import Servicestransformationdigital from '../Servicestransformationdigital';
import bachgroundimg from '../../assets/backgroundtransformationdigitale.jpg';
import Calltoaction from '../Calltoaction';
import ButtonScrollToTop from '../ButtonScrollToTop';

function Transformationdigital() {
    return (
        <>
            <Menu />
            <Bannernoslide
                image={bachgroundimg}
                text={`Transformation Digitale`}
                navigation={`Services >> Transformation Digitale`}
                stylebackimg={`bg-right`}
            />
            <Servicestransformationdigital />
            <Calltoaction 
            text={`Besoin d'un application ou site sur mesure? `}/>
            <Footer />
            <ButtonScrollToTop></ButtonScrollToTop>
        </>
    );
}

export default Transformationdigital;
