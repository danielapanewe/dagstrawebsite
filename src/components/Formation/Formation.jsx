import Menu from '../Menu';
import Footer from '../Footer';
import Bannernoslide from '../Bannernoslide';
import Whycamera from '../Whycamera';
import learning from '../../assets/learningbackimg.jpg';
import aboutlearningimg from '../../assets/aboutlearning.png';
import Cardwithtitle from '../Cardwithtitle';
import Testimonial from '../Testimonial';
import Calltoaction from '../Calltoaction';
import ButtonScrollToTop from '../ButtonScrollToTop';
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
                thintextone={`Les objectifs de la formation en service informatique sont de fournir aux individus les compétences et les connaissances nécessaires pour être capables de :`}
                descriptionfeature={descriptionitems}
                thintextwo={` La formation en service informatique est un élément important pour les individus qui cherchent à travailler dans le domaine de l'informatique, en particulier dans le domaine du service informatique. Elle fournit aux apprenants les compétences et les connaissances nécessaires pour gérer et maintenir les systèmes informatiques et les réseaux, ainsi que pour résoudre les problèmes techniques.`}
                stylescontainer={`mt-12`}
                stylestitle={`text-primarycolor after:bg-primarycolor`}
            />

            <Cardwithtitle title={`NOS FORMATIONS`} cardcontent={formations} />
            <Calltoaction text={`Vous souhaitez accéder à nos formations? `} />
            <Testimonial slides={testimonyslider} />

            <Footer />
            <ButtonScrollToTop></ButtonScrollToTop>
        </>
    );
}

export default Formation;
