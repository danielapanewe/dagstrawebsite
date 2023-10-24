import Menu from '../Menu';
import Footer from '../Footer';
import Bannernoslide from '../Bannernoslide';
import cameraimg from '../../assets/cameraimg.jpg';
import Description from '../Description';
import Camerafeature from '../Camerafeature';
import Whycamera from '../Whycamera';
import Testimonial from '../Testimonial';
import { testimonyslider, descriptionitems } from '../../constants';
import cameraimgtwo from '../../assets/cameraimg2.png';
import ButtonScrollToTop from '../ButtonScrollToTop';

function Videosurveillance() {
    return (
        <>
            <Menu />
            <Bannernoslide
                image={cameraimg}
                text={`Video Surveillance`}
                navigation={`Services >> Video Surveillance`}
                stylebackimg={`bg-center`}
            />
            <Description
                name={`DAGSTRA`}
                paragraph1={` est une solution de vidéosurveillance
            destinée aux Entreprises afin de répondre aux besoins de
            sécurité et de contrôle de site distant. Notre solution est
            simple, évolutive et fournit une vidéosurveillance de haute
            qualité quel que soit le nombre de sites ou de centres de
            supervision.`}
                paragraph2={`DAGSTRA vous garantit un meilleur contrôle de votre
            entreprise et un enregistrement automatique de vos images.`}
                paragraph3={` Cohérente, personnalisée et évolutive, la solution de
            vidéosurveillance de DAGSTRA exploite tous les
            atouts de la technologie IP pour vous proposer Sécurité,
            Détection d'Intrusion, Contrôle d'Accès, etc. La solution de
            vidéosurveillance DAGSTRA optimise le contrôle des
            biens et des personnes et s’adaptent aux besoins de toute
            entreprise et à tout type d’installation.`}
            />
            <Camerafeature />
            <Whycamera
                title={`POURQUOI CHOISIR NOS VIDEOS SURVEILLANCE`}
                image={cameraimgtwo}
                boldtextone={`Dissuader, surveiller et agir sont les 3 principaux objectifs de tout système de vidéosurveillance.`}
                thintextone={` Nos solutions sont donc conçues afin d’apporter une réponse simple et sécuritaire à toutes les problématiques que vous rencontrez quel que soit votre secteur`}
                descriptionfeature={descriptionitems}
                thintextwo={`La surveillance vidéo est un atout essentiel
                de votre système de sécurité qui gagne en
                performance lorsqu’il est couplé à votre contrôle
                d’accès ou votre système d’alarme. C’est pour cela
                que tous nos dispositifs sont interopérables et
                compatibles entre eux ! `}
                stylescontainer={`bg-[#e8e9f0] py-12 mt-12`}
            />
            <Testimonial slides={testimonyslider} />
            <Footer />
            <ButtonScrollToTop></ButtonScrollToTop>
        </>
    );
}

export default Videosurveillance;
