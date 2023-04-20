import Menu from '../Menu';
import Footer from '../Footer';
import Bannernoslide from '../Bannernoslide';
import Whycamera from '../Whycamera';
import learning from '../../assets/learningbackimg.jpg';
import aboutlearningimg from '../../assets/aboutlearning.png';
import Cardwithtitle from '../Cardwithtitle';
import Testimonial from '../Testimonial';
import Calltoaction from '../Calltoaction';
import { formations, descriptionitems, testimonyslider } from '../../constants';
function Formation() {
    return (
        <>
            <Menu />
            <Bannernoslide
                image={learning}
                text={`FORMATION`}
                navigation={`Services >> Formation`}
                stylebackimg={`bg-center`}
            />
            <Whycamera
                title={`LES FORMATIONS CHEZ DAGSTRA`}
                image={aboutlearningimg}
                boldtextone={`Dissuader, surveiller et agir sont les 3 principaux objectifs de tout système de vidéosurveillance`}
                thintextone={`Nos solutions sont donc conçues afin d’apporter une réponse simple et sécuritaire à toutes les problématiques que vous rencontrez quel que soit votre secteur`}
                descriptionfeature={descriptionitems}
                thintextwo={`La surveillance vidéo est un atout essentiel
                de votre système de sécurité qui gagne en
                performance lorsqu’il est couplé à votre contrôle
                d’accès ou votre système d’alarme. C’est pour cela
                que tous nos dispositifs sont interopérables et
                compatibles entre eux ! `}
                stylescontainer={`mt-12`}
                stylestitle={`text-primarycolor after:bg-primarycolor`}
            />

            <Cardwithtitle title={`NOS FORMATIONS`} cardcontent={formations} />
            <Calltoaction 
            text={`Vous souhaitez accéder à nos formations? `}/>
            <Testimonial slides={testimonyslider} />

            <Footer />
        </>
    );
}

export default Formation;
