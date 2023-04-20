import Menu from "../Menu";
import Footer from "../Footer";
import Bannernoslide from '../Bannernoslide';
import backgroundimg from '../../assets/projectback.jpg';
import Filtergallery from "../Filtergallery";
function Realisation() {
  return (


    <><Menu />
        <Bannernoslide
                image={backgroundimg}
                text={`Réalisations`}
                navigation={`Services >> Réalisations`}
                stylebackimg={`bg-right`}
            />
        <Filtergallery/>
    <Footer /></>
);
}

export default Realisation