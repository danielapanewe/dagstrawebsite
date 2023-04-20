import Menu from '../Menu';
import Footer from '../Footer';
import Bannernoslide from '../Bannernoslide';
import Description from '../Description';
import Title from '../Title';
import Firstcard from '../Firstcard';
import Servicestransformationdigital from '../Servicestransformationdigital';
import backgroundimg from '../../assets/networkback.jpeg';
import { featuresCamera } from '../../constants';

function Reseau() {
    return (
        <>
            <Menu />
            <Bannernoslide
                image={backgroundimg}
                text={`Réseau`}
                navigation={`Services >> Réseau`}
                stylebackimg={`bg-center`}
            />
            <Description
                name={`DAGSTRA `}
                paragraph1={`exploite un réseau MPLS couvrant 140 pays et est présent dans plus de        3000 villes avec une implantation forte sur les marchés en expansion en Afrique, en Asie, au Moyen-Orient, en Europe Centrale et Orientale. Notre réseau est prêt à se développer avec votre entreprise tout comme votre besoin en bande passante et en applications.`}
                paragraph2={`Avec un accès facile vers 3000 destinations dans le monde, MATRIX TELECOMS simplifie l’accès des Entreprises à leur réseau via une connexion MPLS unique. Un réseau global qui couvre cinq continents avec une forte pénétration des marchés émergents et qui offre une méthode rapide et efficace pour gérer tout type de trafic, tout en optimisant la diffusion de vos flux vidéo et applications informatiques.`}
            />

            <Title
                nametitle={`NOS AVANTAGES`}
                className={`text-primarycolor text-center mb-8 mt-14`}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center !mt-12 containeur">
                {featuresCamera.map((carditem) => (
                    <Firstcard key={carditem.id} {...carditem} />
                ))}
            </div>

            <Title
            nametitle={`NOS SERVICES`}
            className={`text-primarycolor text-center mb-8 mt-14`}
            />
            <Servicestransformationdigital />
            <Footer />
        </>
    );
}

export default Reseau;
